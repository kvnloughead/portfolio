import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import NavbarContext from '../../contexts/NavbarContext';
import Layout from '../layout/layout';
import Header from '../header/header';
import About from '../about/about';
import Projects from '../projects/projects';
import Skills from '../skills/skills';
import Footer from '../footer/footer';

import { projects, backendProjects } from '../../config/projects';
import microservices from '../../config/microservices';

const pageStyles = {
  fontFamily: 'sans-serif',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const WaypointWrapper = ({
  component: Component, handler, linkName, ...props
}) => (
  <Waypoint
    onEnter={() => { handler(linkName); }}
    onLeave={({ event }) => {
      if (typeof event.target.URL === 'string' && event.target.URL.match(/#([a-z]+)$/)) {
        handler(event.target.URL.match(/#([a-z]+)$/)[1]);
      }
    }}
    {...props}
  >
    <Component {...props} />
  </Waypoint>
);

const App = () => {
  const [currentNavlink, setCurrentNavlink] = useState('home');

  return (
    <Layout>
      <title>Kevin Loughead&apos;s Portfolio</title>
      <Route exact path="/">
        <NavbarContext.Provider value={currentNavlink}>
          <WaypointWrapper component={Header} handler={setCurrentNavlink} linkName="home" />
          <main style={pageStyles}>
            <WaypointWrapper component={About} handler={setCurrentNavlink} linkName="about" bottomOffset="60%" />
            <WaypointWrapper component={Skills} handler={setCurrentNavlink} linkName="skills" bottomOffset="60%" topOffset="60%" />
            <WaypointWrapper component={Projects} handler={setCurrentNavlink} title="Frontend and Fullstack Projects" linkName="Frontend/Fullstack" projects={projects} bottomOffset="60%" topOffset="60%" />
            <Projects title="CLI and Backend Projects" projects={backendProjects} />
            <Waypoint
              onEnter={() => { setCurrentNavlink('contacts'); }}
              onLeave={({ event }) => {
                if (typeof event.target.URL === 'string' && event.target.URL.match(/#([a-z]+)$/)) {
                  setCurrentNavlink(event.target.URL.match(/#([a-z]+)$/)[1]);
                }
              }}
            />
          </main>
        </NavbarContext.Provider>
      </Route>
      <Route path="/backend-projects">
        <Projects title="Microservices" projects={microservices} />
      </Route>
      <Footer />
    </Layout>
  );
};

export default App;
