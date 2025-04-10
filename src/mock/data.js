import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vince | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  cta: 'Tell me more',
};

// ABOUT DATA
export const aboutData = {
  img: 'proPic.jpg',
  paragraphOne:
    "My journey in software engineering began at the Turing School of Software and Design, where I gained invaluable hands-on experience collaborating with like minded individuals. Since then, I've had the privilege of working with a large team of passionate engineers, all pushing the boundaries of what's possible every day.",
  paragraphTwo:
    'I consider myself fortunate to have learned from some of the brightest minds in the industry, and I know that this is only the beginning.',
  paragraphThree: "I'm always looking for new opportunities, and I'm excited for what lies ahead.",
  resume: 'https://resume.creddle.io/resume/4cv0xi3rb72', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'discapedia.png',
    title: 'Discapedia',
    info:
      'Discapedia allows users to search for disc golf discs by name or manufacturer, providing instant access to detailed flight numbers and performance metrics.',
    info2:
      'A Rails 7 application leveraging pg_search for autocomplete functionality and a custom search algorithm to deliver the most accurate match based on user input. Utilizes Hotwire to render results instantly via turbo frame.',
    url: 'https://discapedia.com/',
  },
  {
    id: nanoid(),
    img: 'SophiaPic.png',
    title: 'Sophia',
    info:
      "Speech Operated Peronal Home Interactive Assistant. This is a React Native app with a Ruby on Rails backend. I focused heavily on db schema creation and Google's speech to text api to allow users to record their voice to create tasks for their caretakers.",
    info2: "Took 1st place at Turing School of Software and Design's 2019 Demo Competition.",
    repo: 'https://github.com/kalex19/Sophia-Native', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'HomeChef.png',
    title: 'HomeChef',
    info:
      'Rails 6 booking app that facilitates hiring of home chefs for a personal chef experience. Chefs can enter dishes that customers can choose from based on quantity and price.',
    info2: 'Used to learn webpack and build a front end with interactive JS.',
    repo: 'https://github.com/VinceCarollo/home_chef', // if no repo, the button will not show up
  },
];

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
