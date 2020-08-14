import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vince | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vince Carollo',
  subtitle: "I'm a Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'proPic.jpg',
  paragraphOne:
    'I began my journey on free sites like The Odin Project and Codecademy, which progressed to Turing School of Software and Design to learn how to work with others on a large project',
  paragraphTwo:
    "Now that I'm in a professional setting, I know that I've finally found what I love to do.",
  paragraphThree: "I'm always looking for new oppurnities, and I'm delighted for what lies ahead.",
  resume: 'https://resume.creddle.io/resume/4cv0xi3rb72', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'SophiaPic.png',
    title: 'Sophia',
    info:
      "Speech Operated Peronal Home Interactive Assistant. This is a React Native app with a Ruby on Rails backend. I focused heavily on db schema creation and Google's speech to text api to allow users to record their voice to create tasks for their caretakers.",
    info2: "Took 1st place at Turing School of Software and Design's Demo Competition",
    url: '',
    repo: 'https://github.com/kalex19/Sophia-Native', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vincecarollo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vincecarollo/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/VinceCarollo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
