import styled from 'styled-components';

import { colors } from '../../utils/constants';

export const ProjectContainer = styled.li`
  display: grid;
  grid-template-columns: 45% 45%;
  grid-gap: 125px 100px;
  margin-bottom: 120px;
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-gap: 25px 100px;
  }
`;

export const Image = styled.img`
  border-radius: 2%;
  width: 100%;
  object-position: top;
  object-fit: contain;
  box-shadow: 0 4px 40px rgb(0 0 0 / 28%);
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 1;
  margin: 0 0 10px;
  @media screen and (max-width: 425px) {
    font-size: 24px;
  }
`;

export const TechItem = styled.li`
  border-radius: 5%;
  margin-right: 10px;
  padding: 5px 7px;
  line-height: 1.17;
  color: ${colors.white};
  background-color: ${colors.grey};
  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
  @media screen and (max-width: 425px) {
    font-size: 9px;
    margin-right: 4px;
    padding: 7px 7px;
  }
`;

export const TechStack = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Description = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 26px;
  margin-top: 82px;
  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled.li`
  margin: 0px 0 20px;
  line-height: 1.3;
`;

export const Links = styled.ul`
  display: flex;
`;

export const LinkContainer = styled.li`
  margin-left: 30px;
  font-size: 24px;
  @media screen and (max-width: 1200px) {
    margin-left: 22px;
    font-size: 16px;
  }
`;

export const Link = styled.a`
  color: ${colors.black};
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

export const DemoLink = styled.a`
  font-size: 24px;
  color: ${colors.black};
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
