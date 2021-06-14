import * as React from 'react';
import styled from 'styled-components';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

import {
  SunStyles, Planet, DownArrow, AnimationContainer, InnerOrbit, OuterOrbitStyles,
} from './styles';

const Sun = styled.a`${SunStyles}`;
const OuterOrbit = styled.div`${OuterOrbitStyles}`;

const Animation = () => {
  const [isArrow, setIsArrow] = React.useState(false);
  return (
    <AnimationContainer>
      <OuterOrbit>
        {!isArrow && <Planet /> }
      </OuterOrbit>
      <InnerOrbit />
      <Sun isArrow={isArrow} onAnimationEnd={() => setIsArrow(true)} href={`#${'about'}`}>
        {isArrow && <DownArrow icon={faArrowAltCircleDown} />}
      </Sun>
    </AnimationContainer>
  );
};

export default Animation;
