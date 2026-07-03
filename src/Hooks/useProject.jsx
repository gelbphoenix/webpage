import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { db } from 'Assets/database';

const useProject = () => {
  const gitUserName = db.env.username;
  const gitProviders = db.env.git || [];
  const ignoredTopics = (db.env.ignored_topics || []).map(topic =>
    topic.toLowerCase(),
  );

  const urls = gitProviders.map(provider => ({
    url: `${provider.api_url}/users/${gitUserName}/repos`,
    provider: provider.name,
  }));

  return useQuery({
    queryKey: ['projects', gitUserName, ignoredTopics.join(',')],

    queryFn: async () => {
      const promises = urls.map(async ({ url, provider }) => {
        try {
          const { data } = await axios.get(url);
          return data
            .filter(repo => {
              const topics = Array.isArray(repo.topics) ? repo.topics : [];
              return !topics.some(topic =>
                ignoredTopics.includes(String(topic).toLowerCase()),
              );
            })
            .map(repo => ({
              id: repo.id,
              full_name: repo.full_name || `${repo.owner.login}/${repo.name}`,
              html_url: repo.html_url,
              homepage: repo.homepage || repo.website || null,
              avatar_url: repo.avatar_url || null,
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
