import { TypeAnimation } from 'react-type-animation';
import ProfileButton from 'Components/ProfileButton';
import { db } from 'Assets/database';
import { Button } from 'flowbite-react';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
  const { profiles, sites } = db;

  return (
    <>
      <section id="home">
        <img
          src="https://images.unsplash.com/photo-1687704841026-f8fff04d0b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
          className="w-full h-screen object-cover scale-x-[-1]"
        />
        <div className="w-full h-screen absolute top-0 left-0 bg-gray-300/50 dark:bg-black/50">
          <div className="max-w-[700px] w-max m-auto h-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="flex lg:flex-row flex-col sm:text-5xl text-4xl text-gray-800 dark:text-gray-200 md:max-w-full sm:max-w-[50dvw] max-w-[70dvw] items-baseline">
              <p className="home-title">I&apos;m</p>
              <p className="lg:pl-4 lg:pt-0 pt-2 home-name">
                Phoenix Paulina Schmid
              </p>
            </h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 dark:text-gray-200">
              I&apos;m a
              <TypeAnimation
                sequence={[
                  'Developer.',
                  1500,
                  'Lerner.',
                  1500,
                  'Creator.',
                  1500,
                ]}
                speed={50}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="sm:text-3xl text-2xl pl-[5px]"
              />
            </h2>
            <div className="md:hidden flex justify-evenly pt-6 max-w-[450px] w-[90vw] sm:w-[100vw] items-center flex-wrap">
              {profiles.map((profile, index) => (
                <ProfileButton
                  icon={profile.icon}
                  title={profile.title}
                  longTitle={profile.longTitle}
                  key={index}
                  mobile
                />
              ))}
            </div>
            <div className="lg:max-w-[612px] max-w-[400px] w-full pt-2 flex justify-between items-center">
              <Button
                as="a"
                href="#contact"
                className="rounded-full shadow-lg text-stone-200 dark:text-black bg-[#001b5e] dark:bg-[#4673e4] shadow-gray-400 dark:shadow-gray-600 m-2 py-1 px-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-[#001b7c] dark:hover:bg-[#4674c6] font-extrabold uppercase"
              >
                Contact me
              </Button>
              <Button
                as="a"
                href="#projects"
                className="rounded-full shadow-lg text-black dark:text-stone-200 bg-stone-300 dark:bg-slate-900 shadow-gray-400 dark:shadow-gray-600 m-2 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-slate-400 dark:hover:bg-slate-800 font-normal"
              >
                My Projects
              </Button>
            </div>
            <Button
              as="a"
              href={sites[1].link}
              className="rounded-full shadow-lg text-black dark:text-stone-200 bg-gray-300 dark:bg-gray-900 shadow-gray-400 dark:shadow-gray-600 m-2 py-2 px-2.5 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300 dark:hover:bg-gray-800 absolute bottom-10 self-center"
            >
              <FaChevronDown size={20} />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
