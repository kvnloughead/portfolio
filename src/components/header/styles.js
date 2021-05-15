import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors } from '../../utils/constants';

export const HeaderContainer = styled.header`
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: sans-serif;
  padding: 100px 0;
  height: 100vh;
  min-height: 700px;
  max-height: 900px;
  box-sizing: border-box;
  max-width: 1440px;
  @media screen and (max-width: 767.5px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 375px) {
    max-width: 320px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 800px;
  @media screen and (min-width: 1800px) {
    margin-right: 7vw;
  }
  @media screen and (max-width: 1280px) {
    min-width: 0;
  }
  @media screen and (max-width: 767.5px) {
    align-items: center;
  }
`;

export const Name = styled.h1`
  font-size: 90px;
  margin: 0 0 32px 0;
  @media screen and (max-width: 900px) {
    font-size: 60px;
  }
  @media screen and (max-width: 700px) {
    font-size: 48px;
  }
  @media screen and (max-width: 600px) {
    font-size: 48px;
  }
  @media screen and (max-width: 375px) {
    font-size: 36px;
  }
`;

export const Job = styled.p`
  font-size: 45px;
  margin: 0 0 10px 0;
  @media screen and (max-width: 900px) {
    font-size: 36px;
  }
  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

export const Degree = Job;

export const HeaderImage = styled.img`
  padding-top: 81px;
  @media screen and (max-width: 1024px) {
    padding-top: 20px;
    width: 321px;
    height: 280px;
  }
  @media screen and (max-width: 800px) {
    padding-top: 116px;
    width: 214px;
    height: 187px;
  }
  @media screen and (max-width: 375px) {
    transform: scale(0.4) translateY: -30px;
    padding-top: 10px;
  }
`;

export const DownArrow = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
  color: ${colors.accent};
  font-size: 3em;
  @media screen and (max-width: 568px) {
    font-size: 2em;
  }
`;
