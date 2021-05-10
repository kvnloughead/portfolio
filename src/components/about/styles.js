import styled from 'styled-components';

import { colors } from '../../utils/constants';

export const AboutContainer = styled.section`
  min-height: 300px;
  padding: 96px 100px 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767.5px) {
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    padding: 96px 60px 66px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  @media screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;

export const TextContainer = styled.div`
  margin: 0 0 0 10%;
  flex-basis: 70%;
  @media screen and (max-width: 767.5px) {
    text-align: center;
    margin-left: 0;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  letter-spacing: 0.04em;
  color: ${colors.white};
  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

export const Summary = styled.p`
  font-size: 24px;
  line-height: 1.2;
  color: ${colors.white};
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
