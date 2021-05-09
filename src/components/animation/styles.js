import styled, { keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colors } from '../../utils/constants';

const revolve = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const spin = keyframes`
  100% {
    transform: rotateX(360deg);
  }
`;

const changeColor = keyframes`
  100% {
    background-color: ${colors.accent};
  }
`;

const grow = keyframes`
  100% {
    transform: scale(1.75);
  }
`;

export const AnimationContainer = styled.div`
  position: relative;
  padding-top: 150px;
`;

export const Sun = styled.div`
  border-radius: 50%;
  background: ${colors.white};
  width: 38px;
  height: 38px;
  position: absolute;
  top: 186px;
  left: 35px;
  animation: ${changeColor} 4s ease-in 1;
`;

export const InnerOrbit = styled.div`
  border-radius: 50%;
  border: 1px solid ${colors.white};
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 171px;
  left: 20px;
  animation: ${spin} 5.5s linear 1;
`;

export const OuterOrbitStyles = css`
  border: 1px solid ${colors.white};
  border-radius: 50%;
  width: 103px;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${revolve} ${props => props && props.isArrow ? "5s" : "1s" } linear infinite;
`;

export const Orbit = styled.div`
  border: 1px solid ${colors.white};
  border-radius: 50%;
  width: 103px;
  height: 103px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${revolve} 5s linear infinite;
`;

export const DownArrow = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  position: absolute;
  left: -6px;  
  top: -1px;
  margin: auto;
  text-align: center;
  color: ${colors.accent};
  font-size: 3em;
  @media screen and (max-width: 568px) {
    font-size: 2em;
  }
  animation: ${grow} 3s ease-out 1 forwards; 
`;

export const Planet = styled.div`
  border-radius: 50%;
  height: 10px;
  width: 10px;
  position: absolute;
  top: 55px;
  left: -5px;
  background: ${colors.accent};
`;  