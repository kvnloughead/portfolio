import React from 'react';

import Skill from '../skill/skill';
import { Section, SectionTitle, List } from './styles';
import { skills } from '../../config/resume-data';

const Skills = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <Section id="skills">
      <SectionTitle>Skills</SectionTitle>
      <List>
        {skills.map((item) => (
          <Skill key={item.name} data={item} />
        ))}
      </List>
    </Section>
  </div>
));

export default Skills;
