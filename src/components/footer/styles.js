import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors } from '../../utils/constants';

export const Section = styled.footer`
  font-family: sans-serif;
  background-color: ${colors.grey};
  color: ${colors.white};
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UpArrow = styled(FontAwesomeIcon)`
  margin: 75px 0;
  transform: rotate(180deg);
`;
