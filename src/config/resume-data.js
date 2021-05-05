import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faJs, faPython, faNodeJs, faReact, faAws } from '@fortawesome/free-brands-svg-icons';

export const personalInfo = {
  name: 'Kevin Loughead',
  job: 'Full Stack Developer',
  degree: 'BA Mathematics',
  summary:
    'Fullstack developer and tutor in web development with a background in mathematics. I have a passion for learning and for helping others to learn. I love solving problems and writing reusable and maintainable code.',
};

export const profilePic = './images/profile-pic.jpg';

export const contactInfo = {
  linkedIn: 'https://www.linkedin.com/in/kloughead/',
};

export const skills = [
  { name: 'MongoDB', icon: faDatabase },
  { name: 'Express', src: './images/icons/expressjs-icon.svg'},
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'Python', icon: faPython },
  { name: 'JavaScript', icon: faJs },
  { name: 'Git/Github', icon: faGithub },
  { name: 'AWS', icon: faAws },
];
