import styled from 'styled-components';

import { colors } from '../../utils/constants';

export const Heading = styled.h4`
  margin-top: 0;
`;

export const InlineCode = styled.code`
  color: ${colors.lightColor};
  background: ${colors.pureWhite};
  border-radius: 5px;
  padding: 0 2px;
`;

export const Paragraph = styled.p`
  line-height: 1.3;
  margin: 0;
`;

export const Code = styled.code`
  color: ${colors.accent};
  background: ${colors.pureWhite};
  display: block;
  border-radius: 5px;
  padding: 10px 5px;
  margin-left: 5%;
  overflow: auto;
  max-width: 90%;
`;

export const Anchor = styled.a`
  color: ${colors.grey}
  margin-right: 20px;
  font-size: 22px;
`;
