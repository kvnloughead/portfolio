import styled from 'styled-components';

import { colors } from '../../../utils/constants';

export const Description = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const InlineCode = styled.code`
  color: ${colors.accent};
  background: ${colors.white};
  border-radius: 5px;
  padding: 0 2px;
`;

export const Paragraph = styled.p`
  margin: 0px 0 20px;
  line-height: 1.3;
`;
