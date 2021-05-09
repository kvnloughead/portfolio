import styled from 'styled-components';

import { colors } from '../../utils/constants';

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 66px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: ${colors.white};
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 70px;
  color: ${colors.black};
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  max-width: 1280px;
`;