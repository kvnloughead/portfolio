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

const changeToAccentColor = keyframes`
  100% {
    background-color: ${colors.accent};
  }
`;

const changeToWhite = keyframes`
  100% {
    background-color: ${colors.white};
  }
`;

const grow = keyframes`
  100% {
    transform: scale(5);
  }
`;

const shrink = keyframes`
  100% {
    transform: scale(1.75);
  }
`;

const dissipate = keyframes`
  50% {
    opacity: 0.2;
  }
  99% {
    transform: scale(3);
    opacity: 0;
    visibility: hidden;
  }
  100% {
    transform: scale(.5);
  }
`;

export const AnimationContainer = styled.div`
  position: relative;
  padding-top: 150px;
`;

export const SunStyles = css`
  border-radius: 50%;
  background: ${(props) => (props && props.isArrow ? `${colors.transparent}` : `${colors.white}`)};
  width: 38px;
  height: 38px;
  position: absolute;
  top: 185px;
  left: 34px;
  animation: ${changeToAccentColor} 3s cubic-bezier(.74,.1,.88,.14) 1 forwards, 
             ${grow} 3s cubic-bezier(.74,.1,.88,.14) 1 forwards,
             ${shrink} 1s cubic-bezier(.01,.96,.01,1.04) 1 forwards 3s,
             ${changeToWhite} 1s cubic-bezier(.01,.96,.01,1.04) 1 forwards 3s;
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
  opacity: 1;
  animation: ${revolve} 5s linear infinite,
             ${dissipate} 2s ease-out 1 3s forwards;
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
  width: 65px;
  height: 65px;
  position: absolute;
  left: -5px;
  top: -15px;
  margin: auto;
  text-align: center;
  color: ${colors.accent};
  font-size: 3em;
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
