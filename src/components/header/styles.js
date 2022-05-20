import styled from 'styled-components';

import { colors } from '../../utils/constants';

export const HeaderContainer = styled.header`
  margin: auto;
  height: 100vh;
  min-height: 700px;
  max-height: 1200px;
  max-width: 1280px;
  box-sizing: border-box;

  color: ${colors.white};
  font-family: sans-serif;

  display: flex;
  position: relative;

  @media screen and (max-width: 1380px) {
    margin: 0 100px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 40px;
  }
  @media screen and (max-width: 375px) {
    max-width: 320px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  top: -5%;
  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
  @media screen and (max-width: 475px) {
    margin-top: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 1800px) {
    margin-right: 7vw;
  }
  @media screen and (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
`;

export const Name = styled.h1`
  font-size: 80px;
  margin: 0 0 32px 0;
  @media screen and (max-width: 1200px) {
    font-size: 72px;
  }
  @media screen and (max-width: 1000px) {
    font-size: 48px;
  }
  @media screen and (max-width: 767px) {
    font-size: 36px;
    margin: 8px;
  }
  @media screen and (max-width: 375px) {
    font-size: 36px;
  }
`;

export const Job = styled.p`
  font-size: 45px;
  margin: 0 0 10px 0;
  @media screen and (max-width: 1200px) {
    font-size: 42px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 28px;
  }
  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

export const Degree = Job;

export const Image = styled.img`
  border-radius: 9999px;
  width: 200px;
  height: 200px;
  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 767px) {
    width: 150px;
    height: 150px;
  }
`;

export const Summary = styled.p`
  position: absolute;
  bottom: 10%;
  right: 0;
  font-size: 24px;
  line-height: 1.2;
  text-align: center;
  color: ${colors.white};
  max-width: 80%;
  align-self: flex-end;
  font-family: monospace;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    position: static;
    font-size: 16px;
  }
`;
