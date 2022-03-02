import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../layout/layout';
import Header from '../header/header';
import Projects from '../projects/projects';
import Footer from '../footer/footer';

import { projects, backendProjects } from '../../config/projects';
import microservices from '../../config/microservices';

const pageStyles = {
  fontFamily: 'sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const App = () => {
  return (
    <Layout>
      <title>Kevin Loughead&apos;s Portfolio</title>
      <Route exact path="/">
        <Header />
        <main style={pageStyles}>
          <Projects
            projects={projects}
            title="Frontend and Fullstack Projects"
          />
          <Projects
            title="CLI and Backend Projects"
            projects={backendProjects}
          />
        </main>
      </Route>
      <Route path="/backend-projects">
        <Projects title="Microservices" projects={microservices} />
      </Route>
      <Footer />
    </Layout>
  );
};

export default App;
