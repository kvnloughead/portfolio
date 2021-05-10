import * as React from 'react';

import Project from '../project/project';
import projects from '../../config/projects';
import { ProjectsContainer, Title, List } from './styles';

const Projects = React.forwardRef((props, ref) => (
  <div ref={ref} style={{ width: '100%' }}>
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
  </div>
));

export default Projects;
