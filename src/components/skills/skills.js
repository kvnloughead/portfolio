import React from 'react';

import Skill from '../skill/skill';
import { Section, SectionTitle, List } from './styles';
import { skills } from '../../config/resume-data';

const Skills = () => (
  <Section id="skills">
    <SectionTitle>Skills</SectionTitle>
    <List>
      {skills.map((item) => (
        <Skill key={item.name} data={item} />
      ))}
    </List>
  </Section>
);

export default Skills;
