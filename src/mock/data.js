import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, we are ',
  name: 'Final Iteration',
  subtitle: 'Software Developers',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'We are the group Final Iteration comprised of senior Computer Science students at Sacramento State.',
  paragraphTwo: 'This project is being developed for Digital Davis for UC Davis Health. Digital Davis needs a computerized ' + 
  'management system for the Innovation Center. The system would manage analyzing foot traffic and calculating employee hours.' + 
  ' Visitors and employees have unique IDs that are used to sign in and sign out from the Innovation Center. Their time spent in' + 
  ' the Innovation Center will be analyzed and displayed in an admin portal.  Employee hours will also be used to create timesheets' + 
  ' for employee compensation. Visitors without a unique ID will also be able to sign in and sign out using their own name.',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1Oys4svWeMUfWEVegOQsTPROaeVntVK5j/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'mockup.png',
    title: 'Low-Fidelity Mock-up',
    info: 'Our low-fidelity mock-up was heavily inspired by websites such as Twitter and LinkedIn. We liked how simple and minimalistic those websites were.' + 
    ' Ease of use was also one of our primary concerns. All of the buttons on the right side of the UI controls what is seen within the main feed section which is ' + 
    'the center of the screen. The right side will contain statistics pertaining to the user.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: ' ',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
