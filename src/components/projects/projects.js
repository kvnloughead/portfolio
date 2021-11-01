import * as React from 'react';

import Project from '../project/project';
import { ProjectsContainer, Title, List } from './styles';

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ width: '100%' }}>
      <ProjectsContainer id="projects">
        <Title>
          {props.title}
        </Title>
        <List>
          {props.projects.map((project) => (
            <Project key={project.title} data={project} />
          ))}
        </List>
      </ProjectsContainer>
    </div>
  );
});

export default Projects;
