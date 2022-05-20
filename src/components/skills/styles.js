import styled from 'styled-components';

import { colors } from '../../utils/constants';

export const Section = styled.section`
  padding: 120px 0 100px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 45px 80px;
  justify-content: center;

  @media screen and (max-width: 1279px) {
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 75px;
  }
  @media screen and (max-width: 900px) {
    grid-gap: 45px 90px;
    grid-template-columns: repeat(auto-fit, 120px);
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(2, 9.4vw);
    grid-gap: 45px 120px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  padding: 0 0 54px 32px;
  color: ${colors.white};
  @media screen and (max-width: 575px) {
    font-size: 32px;
  }
`;
