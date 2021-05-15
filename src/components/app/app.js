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

const WaypointWrapper = ({
  component: Component, handler, linkName, ...props
}) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Waypoint onEnter={() => { handler(linkName); }} {...props}><Component /></Waypoint>
);

const App = () => {
  const [currentNavlink, setCurrentNavlink] = useState('Home');

  return (
    <Layout>
      <main style={pageStyles}>
        <title>Kevin Loughead&apos;s Portfolio</title>
        <NavbarContext.Provider value={currentNavlink}>
          <WaypointWrapper component={Header} handler={setCurrentNavlink} linkName="Home" />
          <WaypointWrapper component={About} handler={setCurrentNavlink} linkName="About" bottomOffset="60%" />
          <WaypointWrapper component={Skills} handler={setCurrentNavlink} linkName="Skills" bottomOffset="60%" topOffset="60%" />
          <WaypointWrapper component={Projects} handler={setCurrentNavlink} linkName="Projects" bottomOffset="60%" topOffset="60%" />
          <Waypoint
            onEnter={() => { setCurrentNavlink('Contacts'); }}
            onLeave={({ event }) => {
              if (event.target.URL.endsWith('projects')) { setCurrentNavlink('Projects'); }
            }}
          />
          <Footer />
        </NavbarContext.Provider>
      </main>
    </Layout>
  );
};

export default App;
