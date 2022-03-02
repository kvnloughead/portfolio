import React, { useState } from 'react';
import { Button } from '@mui/material';

import Project from '../project/project';
import { ProjectsContainer, Title, List } from './styles';
import { colors } from '../../utils/constants';

const Projects = React.forwardRef((props, ref) => {
  const [numberShown, setNumberShown] = useState(3);
  const [displayButton, setDisplayButton] = useState(props.projects.length > 3);

  const handleShowMore = () => {
    setNumberShown(props.projects.length);
    setDisplayButton(false);
  };

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <ProjectsContainer id="projects">
        <Title>{props.title}</Title>
        <List>
          {props.projects.slice(0, numberShown).map((project) => (
            <Project key={project.title} data={project} />
          ))}
        </List>
        {displayButton && (
          <Button
            onClick={handleShowMore}
            variant="outlined"
            style={{
              color: colors.darkColor,
              border: `1px solid ${colors.darkColor}`,
            }}
          >
            Show more
          </Button>
        )}
      </ProjectsContainer>
    </div>
  );
});

export default Projects;
