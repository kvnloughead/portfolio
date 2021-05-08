import * as React from 'react';

import Layout from '../layout/layout';
import Header from '../header/header';
import About from '../about/about';
import Projects from '../projects/projects';
import Skills from '../skills/skills';
import Footer from '../footer/footer';

import { colors } from '../../utils/constants';

const pageStyles = {
  background: colors.darkColor,
  fontFamily: 'sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // alignItems: 'center',
  // background: "rgb(30, 61, 89)"
  // background: 'linear-gradient(113deg, rgba(30, 61, 89, 1) 11%, rgba(222,215,196,1) 100%)',
};

const App = () => (
  <Layout>
    <main style={pageStyles}>
      <title>Home Page</title>
      <Header />
      <About />
      <Skills />
      <Projects />
    </main>
    <Footer />
  </Layout>
);

export default App;
