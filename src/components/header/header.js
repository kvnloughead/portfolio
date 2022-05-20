import * as React from 'react';

import { personalInfo, profilePic } from '../../config/resume-data';
import Navbar from '../navbar/navbar';

import {
  HeaderContainer,
  Info,
  Name,
  Job,
  Image,
  Summary,
  FlexContainer,
  Degree,
} from './styles';

const Header = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <Navbar />

    <HeaderContainer id="home">
      <FlexContainer>
        <Info>
          <Name>{`${personalInfo.name}`}</Name>
          <Job>{personalInfo.job}</Job>
          <Degree>{personalInfo.degree}</Degree>
        </Info>
        <Image alt={personalInfo.name} src={profilePic} />
      </FlexContainer>
      <Summary>{personalInfo.summary}</Summary>
    </HeaderContainer>
  </div>
));

export default Header;
