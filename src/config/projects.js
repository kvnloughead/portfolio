export const projects = [
  {
    title: 'My blog (not yet named)',
    image: './images/projects/blog.png',
    tech: ['React', 'NextJS', 'TailwindCSS', 'Remark'],
    description: [
      'Work in progress. A blog site written with NextJS using TailwindCSS for styling.',
      'The content is so far mostly about command line tools automation with Bash scripts.',
      'Articles are written in markdown, using RemarkJS to process it into HTML.',
    ],
    demoLink: 'https://todo-name-blog.vercel.app/',
    repos: [
      {
        name: 'Repo',
        link: 'https://github.com/kvnloughead/blog',
      },
    ],
  },
  {
    title: 'News Explorer',
    image: './images/projects/news-explorer.png',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'JavaScript'],
    description: [
      'A MERN stack application that interacts with the public News API service to search for and display articles.',
      'Authenticated users can save articles to their personal profile pages for later reading.',
      'This was the capstone project of the Practicum Web Development bootcamp. The frontend was created with Create-React-App, and the backend is written in Node/Express.js with MongoDB. The backend is deployed on a Google Cloud EC2 instance, with a Linux OS.',
    ],
    demoLink: 'https://kvnloughead.github.io/news-explorer-frontend/',
    repos: [
      {
        name: 'Front-end',
        link: 'https://github.com/kvnloughead/news-explorer-frontend',
      },
      {
        name: 'Back-end',
        link: 'https://github.com/kvnloughead/news-explorer-api',
      },
    ],
  },
  {
    title: 'An Invoicing App',
    image: './images/projects/invoice.png',
    tech: ['React', 'JavaScript', 'Styled-Components'],
    description: [
      'An invoice app built using specs from Frontend Mentor. Features include',
      '- Dark/light mode',
      '- Forms for creating new invoices and modifying existing invoices',
      '- Invoice line items that calculate the total automatically',
      '- [WIP] Postgresql Backend',
    ],
    demoLink: 'https://github.com/kvnloughead/invoice-app/',
    repos: [
      { name: 'Front-end', link: 'https://kvnloughead.github.io/invoice-app/' },
    ],
  },
  {
    title: 'Ant Robotics',
    image: './images/projects/ant-robotics.png',
    tech: ['React', 'JavaScript'],
    description: [
      'A Create-React-App redesign of the Ant Robotics landing page.',
      'Fully responsive and easily configurable by the client by way of a collection of comprehensive JavaScript config files.',
      'I was the lead of a team of three during the development of this site. We used prettier and eslint to ensure consistency and readability.',
    ],
    demoLink: 'https://kvnloughead.github.io/ant-robotics/',
    repos: [
      {
        name: 'Front-end',
        link: 'https://github.com/kvnloughead/ant-robotics',
      },
    ],
  },
  {
    title: 'This Portfolio',
    image: './images/projects/gatsby-portfolio.png',
    tech: ['React', 'JavaScript', 'Styled-Components'],
    description: [
      'Portfolio project written in React with styled-components. This is the think you are looking at!',
    ],
    demoLink: 'https://kloughead.netlify.app/',
    repos: [
      { name: 'Front-end', link: 'https://github.com/kvnloughead/portfolio' },
    ],
  },
  {
    title: 'Around the US',
    image: './images/projects/around-js.png',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'JavaScript'],
    description: [
      'This picture album app was my first MERN stack application. The front-end was originally written in pure HTML, CSS and JavaScript, but was later ported to React.',
      'The backend, which includes with user authentication with JSON webtokens, is written using Node/Express.js and MongoDB.',
      'Deployed on Heroku.',
    ],
    demoLink: 'https://aroundreact.herokuapp.com/',
    repos: [
      {
        name: 'Front-end',
        link: 'https://github.com/kvnloughead/react-around-api-full/tree/main/around-frontend',
      },
      {
        name: 'Back-end',
        link: 'https://github.com/kvnloughead/react-around-api-full',
      },
    ],
  },
];

export const backendProjects = [
  {
    title: 'Command Line Notes',
    image: './images/projects/cli/command-line-notes.png',
    tech: ['Python', 'argparse', 'git'],
    description: [
      `A minimal command-line note-taking app. Allows you to take markdown notes in your 
      editor of choice. Simply typing \`cln name-of-note\` will create a new note, or open
      one that already exists.`,
      `Supports Github integration, allowing you to push your code to Github with a single
      command \`cln -p\`.`,
    ],
    demoLink: '/command-line-notes',
    internalLink: true,
    repos: [
      {
        name: 'Project Repo',
        link: 'https://github.com/kvnloughead/command-line-notes',
      },
      {
        name: 'Notes Repo',
        link: 'https://github.com/kvnloughead/notes',
      },
    ],
  },
  {
    title: 'Create-Express-App',
    image: './images/projects/cli/create-express-app.png',
    tech: ['NodeJS', 'Bash', 'JavaScript', 'Express', 'Mongo'],
    description: [
      `A CLI that automates the creation of Express apps with MongoDB. You supply it with a 
      name for the project and names for each of the models and it will installs the 
      necessary packages, set up the file structure and write the necessary boilerplate.`,
    ],
    demoLink: '/create-express-app',
    internalLink: true,
    repos: [
      {
        name: 'Project Repo',
        link: 'https://github.com/kvnloughead/create-express-app',
      },
    ],
  },
  {
    title: 'Microservices',
    image: './images/projects/node-express-mongodb.jpg',
    tech: ['Node', 'Express', 'MongoDB', 'JavaScript'],
    description: [
      'A collection of NodeJS microservices',
      '- a URL shortener',
      '- a time stamper',
      '- a header parser',
      '- a file metadata parser',
    ],
    demoLink: '/backend-projects',
    internalLink: true,
  },
];
