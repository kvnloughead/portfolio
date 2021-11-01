import * as React from 'react';

import Project from '../project/project';
import defaultProjects from '../../config/projects';
import { ProjectsContainer, Title, List } from './styles';

const Projects = React.forwardRef((props, ref) => {
  const { projects = defaultProjects } = props;
  return (
    <div ref={ref} style={{ width: '100%' }}>
      <ProjectsContainer id="projects">
        <Title>
          {props.title || 'Frontend and Fullstack Projects'}
        </Title>
        <List>
          {projects.map((project) => (
            <Project key={project.title} data={project} />
          ))}
        </List>
      </ProjectsContainer>
    </div>
  );
});

export default Projects;
