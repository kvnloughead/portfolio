import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { contactInfo } from '../../config/resume-data';

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

const Item = styled.li`
  margin-right: 40px;
  font-size: 45px;
  &: last-of-type {
    margin-right: 0;
  }
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

const Contacts = () => (
  <List>
    <Item>
      <FontAwesomeIcon icon={faGithub} />
    </Item>
    <Item>
      <FontAwesomeIcon href={contactInfo.linkedIn} icon={faLinkedin} />
    </Item>
    <Item>
      <FontAwesomeIcon icon={faEnvelope} />
    </Item>
    <Item>
      <FontAwesomeIcon icon={faDownload} />
    </Item>
  </List>
);

export default Contacts;
