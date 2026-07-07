// icon imports
import {
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineStock,
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
import {
  SiGithub,
  SiMastodon,
  SiPixelfed,
  SiForgejo,
  SiCodeberg,
  SiGit,
  SiDocker,
} from 'react-icons/si';
import { EuropeanStars } from 'Components/Icons';

// JSON Database
export const db = {
  about: [
    {
      text: "I am Phoenix Paulina Schmid, also known as 'gelbphoenix', an independent open-source web developer and consultant based in Germany. I specialize in creating custom web applications, self-hosted cloud solutions, and automation scripts that empower individuals and organizations to take control of their digital environments. My work is driven by a passion for open-source technologies, privacy, and the principles of digital sovereignty.",
      highlight: false,
    },
    {
      text: "As an active maintainer and core contributor to open-source projects like Autocaliweb and Libre Workspace, I don't just install software – I understand it on a code level. This allows me to develop tailormade web applications, write custom automation scripts, and manage deployments that are perfectly optimized for your specific workflows.",
      highlight: true,
    },
    {
      text: 'Driven by a desire to merge seamless functionality with clean aesthetics, I build visually appealing, highly accessible digital environments. I possess a keen eye for detail and a natural instinct for intuitive navigation, ensuring that every project—whether a public website or a self-hosted cloud infrastructure—not only meets strict technical requirements but exceeds expectations in usability. My adaptability and commitment to open ecosystems make me a reliable, long-term partner for anyone looking to transition away from restrictive, proprietary platforms.',
      highlight: false,
    },
    {
      text: 'Beyond the source code, I am a dedicated advocate for digital ethics, diversity, and inclusion in the tech industry. I firmly believe that diverse perspectives and experiences are essential for driving true innovation and creating impactful digital solutions. Through my work, my technical blog, and my active involvement in decentralized networks like the Fediverse, I aim to empower underrepresented groups, break down technical barriers, and foster a welcoming, self-sovereign tech community.',
      highlight: false,
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
      details: 'I`ve been teaching myself to code since January 2023.',
    },
    {
      year: 2025,
      title: 'Maintainer of Autocaliweb',
      company: '',
      duration: {
        text: 'Since May 2025',
        value: null,
      },
      details:
        'Autocaliweb is a free and open-source management platform for eBooks, eComics and PDFs. I`ve started maintaining the project in 2025 as a Fork of Calibre-Web and Calibre-Web Automated. The project is hosted on Codeberg.',
    },
    {
      year: 2025,
      title: 'Collaborator of Libre Workspace',
      company: '',
      duration: {
        text: 'Since May 2025',
        value: null,
      },
      details:
        'Libre Workspace is a free and open-source alternative to Microsoft 365 and Google Workspace. I`ve started collaborating on the project in 2025. The project is hosted on Codeberg.',
    },
  ],
  env: {
    link: 'https://n8n.gelbphoenix.de/webhook/contact',
    username: 'gelbphoenix',
    mail: 'kontakt@gelbphoenix.de',
    ignored_topics: ['ignoreportfolio'],
    domain: {
      base: 'gelbphoenix.de',
      link: 'gelbphoenix.link',
      blog: 'blog.gelbphoenix.de',
    },
    git: [
      {
        name: 'Codeberg',
        api_url: 'https://codeberg.org/api/v1',
        base_url: 'https://codeberg.org',
        image_path: '/media/branch/main/public/picture.webp',
        profile_path: '.png',
      },
      {
        name: 'Forgejo',
        api_url: 'https://git.gelbphoenix.de/api/v1',
        base_url: 'https://git.gelbphoenix.de',
        image_path: '/media/branch/main/public/picture.webp',
        profile_path: '.png',
      },
    ],
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
      longTitle: 'Forgejo/@gelbphoenix',
      icon: <SiForgejo size={20} />,
    },
    {
      title: 'codeberg',
      longTitle: 'Codeberg/@gelbphoenix',
      icon: <SiCodeberg size={20} />,
    },
  ],
  sites: [
    {
      title: 'Home',
      link: '#home',
      icon: <AiOutlineHome size={20} />,
    },
    {
      title: 'About me',
      link: '#about',
      icon: <AiOutlineUser size={20} />,
    },
    {
      title: 'Tech Stack',
      link: '#techstack',
      icon: <BsCodeSlash size={20} />,
    },
    {
      title: 'Career',
      link: '#career',
      icon: <AiOutlineStock size={20} />,
    },
    {
      title: 'Blog',
      link: `#ghost`,
      icon: <FaBlog size={20} />,
    },
    {
      title: 'Projects',
      link: '#projects',
      icon: <AiOutlineProject size={20} />,
    },
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
    {
      title: 'Git',
      icon: <SiGit size={75} color="#f1502f" />,
    },
    {
      title: 'Docker',
      icon: <SiDocker size={75} color="#0db7ed" />,
    },
  ],
  toast: [
    {
      icon: <EuropeanStars size={30} />,
      title: 'Europe has to be sovereign!',
      description:
        'Faced with rising global pressures, can Europe stand strong on its own? A deep dive into the urgent need for a united and sovereign continent.',
      link: {
        url: 'https://blog.gelbphoenix.de/a-sovereign-europe/',
        text: 'Read here.',
      },
    },
  ],
  emojis: [
    { name: ':books:', emoji: '📚' },
    { name: ':rocket:', emoji: '🚀' },
    { name: ':sparkles:', emoji: '✨' },
    { name: ':bug:', emoji: '🐛' },
    { name: ':hammer:', emoji: '🔨' },
    { name: ':art:', emoji: '🎨' },
    { name: ':lock:', emoji: '🔒' },
    { name: ':gear:', emoji: '⚙️' },
    { name: ':fire:', emoji: '🔥' },
    { name: ':star:', emoji: '⭐' },
    { name: ':trophy:', emoji: '🏆' },
    { name: ':globe_with_meridians:', emoji: '🌐' },
  ],
};
