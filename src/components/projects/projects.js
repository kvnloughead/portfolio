import * as React from 'react';

import Project from '../project/project';
import projects from '../../config/projects';
import  { ProjectsContainer, Title, List } from './styles';

const Projects = () => (
  <ProjectsContainer id="projects">
    <Title>
      Projects
    </Title>
    <List>
      {projects.map((project) => (
        <Project key={project.title} data={project} />
      ))}
    </List>
  </ProjectsContainer>
);

export default Projects;
