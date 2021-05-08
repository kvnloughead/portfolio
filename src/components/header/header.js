import * as React from 'react';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/navbar';
import Contacts from '../contacts/contacts';

import { personalInfo } from '../../config/resume-data';
import { headerBackground } from '../../config/general';

import { HeaderContainer, Info, Name, Job, Degree, HeaderImage, DownArrow } from './styles';

const Header = () => (
  <HeaderContainer id="header">
    <Navbar />
    <Info>
      <Name>{`${personalInfo.name}`}</Name>
      <Job>{personalInfo.job}</Job>
      <Degree>{personalInfo.degree}</Degree>
      <Contacts />
    </Info>
    <HeaderImage src={headerBackground} />
    <DownArrow icon={faArrowAltCircleDown} />
  </HeaderContainer>
);

export default Header;
