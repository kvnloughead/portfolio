import * as React from 'react';

import Navbar from '../navbar/navbar';
import Contacts from '../contacts/contacts';
import Animation from '../animation/animation';

import { personalInfo } from '../../config/resume-data';

import { HeaderContainer, Info, Name, Job, Degree } from './styles';

const Header = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <HeaderContainer id="home">
      <Navbar />
      <Info>
        <Name>{`${personalInfo.name}`}</Name>
        <Job>{personalInfo.job}</Job>
        <Degree>{personalInfo.degree}</Degree>
        <Contacts />
      </Info>
      <Animation />
    </HeaderContainer>
  </div>
));

export default Header;
