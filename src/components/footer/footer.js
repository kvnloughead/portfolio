import React from 'react';

import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

import Contacts from '../contacts/contacts';
import { Section, UpArrow } from './styles';

const Footer = () => (
  <Section id="contacts">
    <a href="#home">
      <UpArrow icon={faArrowAltCircleDown} size="3x" />
    </a>
    <Contacts />
  </Section>
);

export default Footer;
