import { Button } from 'flowbite-react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiSolidShow } from 'react-icons/bi';
import { db } from 'Assets/database';
import parseEmoji from 'Components/parseEmoji';

const ProjectItem = ({
  title,
  rawTitle,
  language,
  description,
  link,
  page,
  provider,
  avatar_url,
}) => {
  const gitUserName = db.env.username;

  const providerData =
    db.env.git.find(p => p.name === provider) || db.env.git[0];

  const getImageUrl = repo => {
    return `${providerData.base_url}/${repo}${providerData.image_path}`;
  };

  const getProfileUrl = username => {
    return `${providerData.base_url}/${username}${providerData.profile_path}`;
  };

  const image = avatar_url ? avatar_url : getImageUrl(rawTitle);

  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl group hover:bg-gradient-to-r from-gray-400 to-[#001b5e] dark:from-gray-600 dark:to-[#4673e4] overflow-hidden object-contain">
        <img
          src={image}
          className="rounded-xl group-hover:opacity-10 ease-out duration-100 aspect-square object-cover object-left bg-gray-400 w-full"
          onError={({ currentTarget }) => {
            currentTarget.onError = null;
            const repoParts = rawTitle ? rawTitle.split('/') : [];
            const username = repoParts.length > 0 ? repoParts[0] : gitUserName;
            currentTarget.src = getProfileUrl(username);
          }}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[75%]">
          <p className="text-[10px] text-white text-center mt-1">
            {providerData.name}
          </p>

          <h3 className="mdl:text-1xl text-base capitalize font-bold text-white tracking-wider text-center truncate">
            {title.replace(/-/g, ' ')}
          </h3>

          {language && (
            <p className="text-center mt-1">
              <span className="inline-block text-xs font-mono bg-black/30 dark:bg-white/20 text-white px-2 py-0.5 rounded-md align-middle">
                {language}
              </span>
            </p>
          )}

          {description && (
            <p className="text-xs text-stone-100 text-center line-clamp-2 mt-2 mb-3 px-1 italic">
              {parseEmoji(description)}
            </p>
          )}

          <div className="flex gap-1 min-w- mt-2 justify-around">
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-700 text-gray-700 dark:text-white font-bold hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <AiOutlineInfoCircle size={20} />
              <span id={`${rawTitle}_repo`} className="sm:block ml-1 hidden">
                Repo
              </span>
            </Button>
            {page && page !== window.location.href.substring(0, 22) ? (
              <Button
                as="a"
                href={page}
                target="_blank"
                rel="noopener noreferrer"
                className=" bg-gray-400 dark:bg-gray-600 text-gray-700 dark:text-white font-bold hover:bg-gray-300 dark:hover:bg-gray-500"
              >
                <BiSolidShow size={20} />
                <span className="sm:block ml-1 hidden">Demo</span>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
