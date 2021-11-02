const microservices = [
  {
    title: 'Url Shortener',
    slug: 'URLShortener',
    image: './images/projects/microservices/stubbyurl.png',
    tech: ['Node', 'Express', 'MongoDB', 'JavaScript'],
    demoLink: 'https://stubbyurl.herokuapp.com/',
    repos: [
      { name: 'Repo', link: 'https://github.com/kvnloughead/url-shortener' },
    ],
    markdown: './markdown/urlshortener.mdx',
  },
  {
    title: 'Time Stamper',
    slug: 'Timestamper',
    image: './images/projects/microservices/timestamp.png',
    tech: ['Node', 'Express', 'JavaScript'],
    demoLink: 'https://stampthetime.herokuapp.com/',
    repos: [
      { name: 'Repo', link: 'https://github.com/kvnloughead/timestamp' },
    ],
    markdown: './markdown/timestamp.mdx',
  },
];

export default microservices;
