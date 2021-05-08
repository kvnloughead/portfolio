import * as React from 'react';

import { personalInfo, profilePic } from '../../config/resume-data';

import {
  AboutContainer,
  Image,
  Title,
  Summary,
  TextContainer,
} from './styles';

const About = () => (
  <AboutContainer id="about" >
    <Image alt={personalInfo.name} src={profilePic} />
    <TextContainer>
      <Title>
        About Me
      </Title>
      <Summary>
        {personalInfo.summary}
      </Summary>
    </TextContainer>
  </AboutContainer>
);

export default About;
