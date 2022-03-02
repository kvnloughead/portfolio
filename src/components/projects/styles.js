import styled from 'styled-components';

import { colors } from '../../utils/constants';

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 66px;
  width: 100%;
  box-sizing: border-box;
  background: ${colors.white};
  @media screen and (max-width: 525px) {
    align-items: flex-start;
    padding: 48px 32px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 70px;
  color: ${colors.black};
  @media screen and (max-width: 525px) {
    font-size: 24px;
  }
`;

export const List = styled.ul`
  max-width: 1280px;
  padding: 0;
  margin: 0;
`;
