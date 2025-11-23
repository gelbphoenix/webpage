// icon imports
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  // AiOutlineStock,
  AiOutlineUser,
} from 'react-icons/ai';
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoReact,
} from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { FaLinux, FaBlog } from 'react-icons/fa';
import { PiPlaceholderFill } from 'react-icons/pi';
import { SiGithub, SiMastodon, SiPixelfed, SiForgejo } from 'react-icons/si';
import { UkraineTrident } from 'Components/Icons';

// JSON Database
export const db = {
  about: [
    {
      text: 'Phoenix Paulina Schmid is a dedicated and talented student web developer based in Germany with a passion for creating innovative digital solutions. With a strong background in programming languages such as HTML, CSS, and JavaScript, they are constantly expanding their skills and staying up-to-date with the latest trends and technologies in the field. She has a relentless curiosity and problem-solving mindset that drives them to tackle complex challenges and deliver efficient and user-friendly websites.',
    },
    {
      text: 'Driven by her desire to combine functionality with aesthetics, they strive to create visually appealing designs that enhance the user experience. They possess a keen eye for detail and a natural instinct for intuitive navigation, ensuring that their projects not only meet technical requirements but also exceed expectations in terms of design and usability. Their commitment to continuous learning and their ability to adapt to new tools and frameworks make them a valuable asset in the ever-evolving world of web development. With a strong work ethic and a genuine enthusiasm for her craft, they are poised to make a significant impact in the field of web development.',
    },
    {
      text: 'In addition to her technical expertise, Paulina is also a strong advocate for diversity and inclusion in the tech industry. They actively contribute to creating a welcoming and inclusive environment for all individuals. She believes that diverse perspectives and experiences are essential for driving innovation and creating truly impactful digital solutions. Through her work, she aims to inspire and empower underrepresented groups in the field of web development, breaking barriers and fostering a more inclusive tech community.',
    },
  ],
  career: [
    {
      year: 2023,
      title: 'Student developer',
      company: '',
      duration: {
        text: '',
        value: null,
      },
      details:
        'I`ve been teaching myself to code since January 2023. I focus on web development with Javascript, ReactJS and NodeJS.',
    },
  ],
  env: {
    link: 'https://public.herotofu.com/v1/4397f080-18f1-11ee-8025-97a9fb2f29da',
    username: 'gelbphoenix',
    mail: 'kontakt@gelbphoenix.de',
    domain: {
      base: 'gelbphoenix.de',
      link: 'gelbphoenix.link',
    },
  },
  profiles: [
    {
      title: 'Mastodon',
      longTitle: '@gelbphoenix@social.gelbphoenix.de',
      icon: <SiMastodon size={20} />,
    },
    {
      title: 'Pixelfed',
      longTitle: '@gelbphoenix@gram.social',
      icon: <SiPixelfed size={20} />,
    },
    {
      title: 'Blog',
      longTitle: 'blog.gelbphoenix.de',
      icon: <FaBlog size={20} />,
    },
    {
      title: 'GitHub',
      longTitle: 'GitHub/@gelbphoenix',
      icon: <SiGithub size={20} />,
    },
    {
      title: 'git',
      longTitle: 'Forgejo',
      icon: <SiForgejo size={20} />,
    },
  ],
  sites: [
    {
      title: 'Home',
      link: '#home',
      icon: <AiOutlineHome size={20} />,
    },
    {
      title: 'Tech Stack',
      link: '#techstack',
      icon: <BsCodeSlash size={20} />,
    },
    {
      title: 'Projects',
      link: '#projects',
      icon: <AiOutlineProject size={20} />,
    },
    {
      title: 'About',
      link: '#about',
      icon: <AiOutlineUser size={20} />,
    },
    // {
    //   title: 'Career',
    //   link: '#career',
    //   icon: <AiOutlineStock size={20} />,
    // },
    {
      title: 'Contact',
      link: '#contact',
      icon: <AiOutlineMail size={20} />,
    },
  ],
  techStack: [
    {
      title: 'HTML',
      icon: <BiLogoHtml5 size={75} color="#e34c26" />,
    },
    {
      title: 'CSS',
      icon: <BiLogoCss3 size={75} color="#264de4" />,
    },
    {
      title: 'JS',
      icon: <BiLogoJavascript size={75} color="#f0db4f" />,
    },
    {
      title: 'React',
      icon: <BiLogoReact size={75} color="#61dbfb" />,
    },
    {
      title: 'Tailwind',
      icon: <BiLogoTailwindCss size={75} color="#00cec9" />,
    },
    {
      title: 'Node',
      icon: <BiLogoNodejs size={75} color="#026e00" />,
    },
    {
      title: 'Linux',
      icon: <FaLinux size={75} color="#f79f00" />,
    },
  ],
  toast: [
    {
      icon: <UkraineTrident size={25} />,
      title: 'Slava Ukraini!',
      description:
        'The defence of Europe and the free world hangs on Ukraine. Trump\'s "peace plan" sells Ukraine to Russia.',
    },
  ],
};
