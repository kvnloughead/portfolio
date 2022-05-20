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
  name: 'Laurel Ipsum',
  job: 'Senior Artificial Turf Engineer',
  degree: 'BS Applied Turf Management',
  summary:
    "Hello, world! I'm Laurel and this is my website. I'm a Turf Management  professional with over 20 years of experience in all of the newest Turfware Frameworks that have been developed in the last decade. I also dabble in web development, hence the website, and the list of web dev skills.",
};

// Images should go in public/images
export const profilePic = './images/placeholder.jpg';

export const contactInfo = {
  // Change the placeholders or remove the links from the array
  linkedIn: 'https://www.linkedin.com/in/placeholder/',
  github: 'https://github.com/placeholder',
  email: 'mailto:placeholder@email.com',
  resume: '', // link to a local file
};

export const skills = [
  // Update as desired, or just pull the whole Skills component. I don't
  // like it very much, but it works. Most icons are from fontawesome, but
  // other images work, although they might not fit in.
  { name: 'MongoDB', icon: faDatabase },
  { name: 'Express', src: './images/icons/expressjs-icon.svg' },
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Python', icon: faPython },
  { name: 'JavaScript', icon: faJs },
  { name: 'Git/Github', icon: faGithub },
  { name: 'AWS', icon: faAws },
];
