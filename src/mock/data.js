import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vadim Ivanov', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'My portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vadim Ivanov',
  subtitle: 'I am a QA Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am good at analyzing and pattern recognition. These skills make me good at finding problems. However, what makes me a great software tester are my interpersonal skills. Improving software quality is a team effort which often comes down to communication.',
  paragraphTwo: '“A problem well stated is a problem half solved.” --John Dewey',
  paragraphThree: ' ',
  resume: 'http://linkedin.com/in/вадим-иванов', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Coming soon...',
    info: 'Coming soon...',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ivanov.vadim.olegovich@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'http://linkedin.com/in/вадим-иванов',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vadilog',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
