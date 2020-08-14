import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vince | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vince Carollo',
  subtitle: "I'm a web developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'proPic.jpg',
  paragraphOne:
    'I began my journey on free sites like The Odin Project and Codecademy, which progressed to Turing School of Software and Design to learn how to work with others on a large project',
  paragraphTwo:
    "Now that I'm working professionally, I know that I've finally found what I love to do.",
  paragraphThree:
    "I'm always looking for new opportunities, and I'm delighted for what lies ahead.",
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
    info2: "Took 1st place at Turing School of Software and Design's 2019 Demo Competition",
    url: '',
    repo: 'https://github.com/kalex19/Sophia-Native', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HomeChef.png',
    title: 'HomeChef',
    info:
      'Rails 6 booking app that facilitates hiring of home chefs for a personal chef experience. Chefs can enter dishes that customers can choose from based on quantity and price.',
    info2: 'Used to learn webpack and build a front end with interactive JS',
    url: 'https://evening-reaches-67042.herokuapp.com/',
    repo: 'https://github.com/VinceCarollo/home_chef', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RioPic.jpg',
    title: 'Koroibos',
    info:
      'Fourty Eight hour challenge to import and serve up various endpoints from a large CSV file that contains data from the 2016 Olympic games.',
    info2: '',
    url: 'https://sheltered-mesa-39586.herokuapp.com/',
    repo: 'https://github.com/VinceCarollo/koroibos', // if no repo, the button will not show up
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
