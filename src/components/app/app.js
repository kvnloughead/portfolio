/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import NavbarContext from '../../contexts/NavbarContext';
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
};

const App = () => {
  const [currentNavlink, setCurrentNavlink] = useState('Home');

  return (
    <Layout>
      <main style={pageStyles}>
        <title>Home Page</title>
        <NavbarContext.Provider value={currentNavlink}>
          <Waypoint
            onEnter={() => { setCurrentNavlink('Home'); }}
          >
            <Header />
          </Waypoint>
        </NavbarContext.Provider>
        <Waypoint
          onEnter={() => { setCurrentNavlink('About'); }}
          bottomOffset="60%"
        >
          <About />
        </Waypoint>
        <Waypoint
          onEnter={() => { setCurrentNavlink('Skills'); }}
          bottomOffset="60%"
        >
          <Skills />
        </Waypoint>

        <Waypoint
          onEnter={() => { setCurrentNavlink('Projects'); }}
          bottomOffset="60%"
        >
          <Projects />
        </Waypoint>

        <Waypoint
          onEnter={() => { setCurrentNavlink('Contacts'); }}
          onLeave={() => { setCurrentNavlink('Projects'); }}
        />
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
