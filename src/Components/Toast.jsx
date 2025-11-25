import { Toast as ToastFB } from 'flowbite-react';

const Toast = ({ content, height }) => {
  if (content.title === null || content.title === '') return null;

  return (
    <ToastFB className="fixed inset-x-6 bottom-[3%] z-10 outline outline-2 outline-stone-600 dark:outline-stone-300 text-[#001b5e] dark:text-stone-300">
      <div className="bg-[#001b5e] dark:bg-stone-300">{content.icon}</div>
      <div className="ml-3 flex flex-col">
        <span className="mb-1 text-lg font-bold">{content.title}</span>
        <span className="text-sm font-normal">{content.description}</span>
      </div>
      <ToastFB.Toggle />
    </ToastFB>
  );
};

export default Toast;
