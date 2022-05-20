export const projects = [
  {
    title: 'Isometric Turf Layout',
    // This is used to hash the markdown components. See components/ProjectInfo
    id: 'IsometricTurf',
    image: './images/projects/isometric-turf.jpg',
    tech: ['Turf', 'Turf Management', 'Straight Lines'],
    description: [
      'An alternative for if you don\t want to use markdown.',
      'Allows multiple paragraphs',
    ],
    // The file where the markdown is stored
    markdown: './markdown/urlshortener.mdx',
    linkLabel: 'Live Site',
    demoLink: 'https://love-that-turf.site/',
    // Allows for the possibility of multiple repos per project. Useful for
    // fullstack projects if they are split into two repos
    repos: [
      {
        name: 'Repo',
        link: 'https://turfhub.com/laurel/isometric',
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
    linkLabel: 'Details',
    demoLink: 'https://todo-name-blog.vercel.app/posts/command-line-notes',
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
    linkLabel: 'Details',
    demoLink: '/backend-projects',
    internalLink: true,
  },
];
