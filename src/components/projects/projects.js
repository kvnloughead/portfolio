import React, { useState } from 'react';
import { Button } from '@mui/material';

import Project from '../project/project';
import { ProjectsContainer, Title, List } from './styles';

const Projects = React.forwardRef((props, ref) => {
  const [numberShown] = useState(3);
  return (
    <div ref={ref} style={{ width: '100%' }}>
      <ProjectsContainer id="projects">
        <Title>{props.title}</Title>
        <List>
          {props.projects.slice(0, numberShown).map((project) => (
            <Project key={project.title} data={project} />
          ))}
        </List>
        {props.projects.length > 3 && (
          <Button variant="outlined" color="error">
            See More
          </Button>
        )}
      </ProjectsContainer>
    </div>
  );
});

export default Projects;
