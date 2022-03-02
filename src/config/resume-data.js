import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faJs,
  faPython,
  faNodeJs,
  faReact,
  faAws,
} from '@fortawesome/free-brands-svg-icons';

export const personalInfo = {
  name: 'Kevin Loughead',
  job: 'Software Engineer | Content Manager',
  degree: 'BA Mathematics',
  summary:
    "Hello, world! My name's Kevin and I'm a content manager and author for the Practicum by Yandex software engineering bootcamp. I'm also something of a software engineer myself. I like to work on web development projects and command line applications, in a variety of languages. Thanks for stopping by!",
};

export const profilePic = './images/profile-pic.jpg';

export const contactInfo = {
  linkedIn: 'https://www.linkedin.com/in/kloughead/',
  github: 'https://github.com/kvnloughead',
  email: 'mailto:kvnloughead@gmail.com',
  resume: './kloughead_resume.pdf',
};

export const skills = [
  { name: 'MongoDB', icon: faDatabase },
  { name: 'Express', src: './images/icons/expressjs-icon.svg' },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Python', icon: faPython },
  { name: 'JavaScript', icon: faJs },
  { name: 'Git/Github', icon: faGithub },
  { name: 'AWS', icon: faAws },
];
