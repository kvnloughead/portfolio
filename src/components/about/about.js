import * as React from 'react';

import { personalInfo, profilePic } from '../../config/resume-data';

import {
  AboutContainer,
  Image,
  Title,
  Summary,
  TextContainer,
} from './styles';

const About = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <AboutContainer id="about">
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
  </div>
));

export default About;
