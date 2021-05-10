// import { addUniqueId } from '../utils/unique-id';

export const htmlIds = {
  home: 'header',
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  contacts: 'contacts',
};

export const links = [
  {
    htmlId: htmlIds.home,
    title: 'Home',
  },
  {
    htmlId: htmlIds.about,
    title: 'About',
  },
  {
    htmlId: htmlIds.skills,
    title: 'Skills',
  },
  {
    htmlId: htmlIds.projects,
    title: 'Projects',
  },
  {
    htmlId: htmlIds.contacts,
    title: 'Contacts',
  },
];

export const darkMenuIcon = './images/navbar/menu-icon-dark.svg';
export const lightMenuIcon = './images/navbar/menu-icon-light.svg';
export const darkCloseIcon = './images/navbar/dark-close-icon.svg';
export const lightCloseIcon = './images/navbar/light-close-icon.svg';

// addUniqueId(links);
