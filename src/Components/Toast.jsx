import { Toast as ToastFB } from 'flowbite-react';

const Toast = ({ content }) => {
  if (content.title === null || content.title === '') return null;

  return (
    <ToastFB className="fixed left-6 bottom-6 z-10 outline outline-2 outline-stone-600 dark:outline-stone-300 text-[#001b5e] dark:text-stone-300">
      <div className="">{content.icon}</div>
      <div className="ml-3 flex flex-col">
        <span className="mb-1 text-lg font-bold">{content.title}</span>
        <span className="text-sm font-normal">{content.description}</span>
        {content.link.text && content.link.url ? (
          <a
            href={content.link.url}
            className="hover:underline pt-1 mt-2 border-t-2 border-dashed"
          >
            {content.link.text}
          </a>
        ) : (
          ''
        )}
      </div>
      <ToastFB.Toggle />
    </ToastFB>
  );
};

export default Toast;
