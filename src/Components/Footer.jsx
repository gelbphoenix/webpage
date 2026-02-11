import { Button, Tooltip } from 'flowbite-react';
import { FaChevronUp } from 'react-icons/fa';
import { db } from 'Assets/database.jsx';

const Footer = () => {
  const { env } = db;

  return (
    <>
      <div className="grid grid-cols-3 gap-2 pb-2 text-sm">
        <section className="flex lg:flex-row flex-col justify-center items-start content-center flex-wrap text-gray-500 dark:text-gray-300 ml-3.5">
          &copy;{' '}
          {new Date().getFullYear() !== 2023
            ? `2023 - ${new Date().getFullYear()}`
            : new Date().getFullYear()}
          <span className="font-bold lg:ml-1 flex flex-row flex-wrap">
            Made with
            <p className="text-red-600 sm:mx-1 ml-1">{'<3'}</p>
            by Phoenix Paulina Schmid
          </span>
        </section>
        <section className="flex lg:flex-row flex-col justify-center items-center flex-wrap text-gray-500 dark:text-gray-300">
          <Tooltip content="Back to top" placement="top">
            <Button
              as="a"
              href="#home"
              className="rounded-full shadow-lg text-stone-200 dark:text-black bg-[#001b5e] dark:bg-[#4673e4] shadow-gray-400 dark:shadow-gray-600 m-2 py-2 px-2.5 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#001b7c] dark:hover:bg-[#4674c6] font-extrabold uppercase"
            >
              <FaChevronUp size={20} />
            </Button>
          </Tooltip>
        </section>
        <section className="flex lg:flex-row flex-col flex-wrap justify-around items-end content-center text-gray-600 dark:text-gray-300">
          <a href="#" className="hover:underline">
            {`https://${env.domain.base}/`}
          </a>
          <a href={`mailto:${env.mail}`} className="hover:underline">
            {env.mail}
          </a>
        </section>
      </div>
    </>
  );
};

export default Footer;
