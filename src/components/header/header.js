import * as React from 'react';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/navbar';
import Contacts from '../contacts/contacts';
import Animation from '../animation/animation';

import { personalInfo } from '../../config/resume-data';

import { HeaderContainer, Info, Name, Job, Degree, DownArrow } from './styles';

const Header = () => (
  <HeaderContainer id="header">
    <Navbar />
    <Info>
      <Name>{`${personalInfo.name}`}</Name>
      <Job>{personalInfo.job}</Job>
      <Degree>{personalInfo.degree}</Degree>
      <Contacts />
    </Info>
    <Animation />
    <DownArrow icon={faArrowAltCircleDown} />
  </HeaderContainer>
);

export default Header;
