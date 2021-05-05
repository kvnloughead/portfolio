import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors } from '../../utils/constants';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${colors.white};
  font-size: 68px;
  @media screen and (max-width: 425px) {
    font-size: 34px;
    width: 36px;
    height: 36px;
  }
`;

export const Label = styled.h3`
  color: ${colors.white};
  font-size: 24px;
  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
