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

const Anchor = styled.a`
  color: rgb(205, 206, 210);
`;

const Contacts = () => (
  <List>
    <Item>
      <Anchor
        target="_blank"
        href={contactInfo.github}
        rel="noopener noreferer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Anchor>
    </Item>
    <Item>
      <Anchor
        target="_blank"
        href={contactInfo.linkedIn}
        rel="noopener noreferer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Anchor>
    </Item>
    <Item>
      <Anchor target="_blank" href={contactInfo.email} rel="noopener noreferer">
        <FontAwesomeIcon icon={faEnvelope} />
      </Anchor>
    </Item>
    <Item>
      <Anchor
        target="_blank"
        href={contactInfo.resume}
        rel="noopener noreferer"
      >
        <FontAwesomeIcon icon={faDownload} />
      </Anchor>
    </Item>
  </List>
);

export default Contacts;
