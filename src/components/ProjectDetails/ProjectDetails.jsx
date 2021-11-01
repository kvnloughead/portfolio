import React from 'react';

import './styles.css';
import Projects from '../projects/projects';
import microservices from '../../config/microservices';

const ProjectDetails = () => {
  return (
    <header>
      <h2>Microservices</h2>
      <Projects title="Microservices" projects={microservices} />
    </header>
  );
};

export default ProjectDetails;
