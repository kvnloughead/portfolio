const projects = [
  {
    title: 'News Explorer',
    image: './images/projects/news-explorer.png',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'JavaScript'],
    description: [
      'A MERN stack application that interacts with the public News API service to search for and display articles.',
      'Authenticated users can save articles to their personal profile pages for later reading.',
      'This was the capstone project of the Practicum Web Development bootcamp. The frontend was created with Create-React-App, and the backend is written in Node/Express.js with MongoDB. The backend is deployed on a AWS(EC2) instance, with a Linux OS.',
    ],
    demoLink: 'https://kvnloughead.github.io/news-explorer-frontend/',
    repos: [
      { name: 'Front-end', link: 'https://github.com/kvnloughead/news-explorer-frontend' },
      { name: 'Back-end', link: 'https://github.com/kvnloughead/news-explorer-api' },
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
    repos: [{ name: 'Front-end', link: 'https://github.com/kvnloughead/ant-robotics' }],
  },
  {
    title: 'My Gatsby Portfolio',
    image: './images/projects/gatsby-portfolio.png',
    tech: ['Gatsby', 'React', 'jQuery', 'JavaScript'],
    description: [
      "Portfolio project written using Gatbsy and styled-components. This is a work in progress, so I'll have to add more details",
      'Lorem ipsum ... neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    ],
    demoLink: '#',
    repos: [{ name: 'Front-end', link: 'https://github.com/kvnloughead/gatsby-portfolio' }],
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
      { name: 'Front-end', link: 'https://github.com/kvnloughead/react-around-api-full/tree/main/around-frontend' },
      { name: 'Back-end', link: 'https://github.com/kvnloughead/react-around-api-full' },
    ],
  },
];

export default projects;
