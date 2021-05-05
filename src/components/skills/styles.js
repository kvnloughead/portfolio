import styled from 'styled-components';

import { colors } from '../../utils/constants';

export const Section = styled.section`
  padding: 0 0 100px 0;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 45px 160px;

  @media screen and (max-width: 1279px) {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(4, 9.4vw);
    grid-row-gap: 75px;
  }
  @media screen and (max-width: 800px) {
    grid-gap: 45px 90px;
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: repeat(2, 9.4vw);
    grid-gap: 45px 120px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  text-align: right;
  color: ${colors.white};
  @media screen and (max-width: 575px) {
    font-size: 32px;
  }
`;
