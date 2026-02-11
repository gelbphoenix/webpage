import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { db } from 'Assets/database';

const useProject = () => {
  const gitUserName = db.env.username;
  const gitProviders = db.env.git || [];

  const urls = gitProviders.map(provider => ({
    url: `${provider.api_url}/users/${gitUserName}/repos`,
    provider: provider.name,
  }));

  return useQuery({
    queryKey: ['projects', gitUserName],

    queryFn: async () => {
      const promises = urls.map(async ({ url, provider }) => {
        try {
          const { data } = await axios.get(url);
          return data.map(repo => ({
            id: repo.id,
            full_name: repo.full_name || `${repo.owner.login}/${repo.name}`,
            html_url:
              repo.html_url ||
              (() => {
                const providerConfig = db.env.git.find(
                  p => p.name === provider,
                );
                if (providerConfig && providerConfig.base_url) {
                  return `${providerConfig.base_url}/${repo.full_name || `${repo.owner.login}/${repo.name}`}`;
                }
                return '';
              })(),
            homepage: repo.homepage || null,
            provider: provider,
          }));
        } catch (error) {
          console.error(
            `Fehler beim Abrufen der Repositories von ${provider}:`,
            error,
          );
          return [];
        }
      });

      const results = await Promise.all(promises);
      return results.flat();
    },
  });
};

export default useProject;
