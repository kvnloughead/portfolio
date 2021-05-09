import * as React from 'react';
import styled from 'styled-components';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

import { Sun, Orbit, Planet, DownArrow, AnimationContainer, InnerOrbit, OuterOrbitStyles } from './styles'

const OuterOrbit = styled.div`${OuterOrbitStyles}`;

const Animation = () => {
  const [isArrow, setIsArrow] = React.useState(false);
  return (
    <AnimationContainer>
      {/* <Orbit isArrow>
        <Planet />
      </Orbit> */}
      <OuterOrbit isArrow>
        <Planet />
      </OuterOrbit>
      <InnerOrbit />
      <Sun onAnimationEnd={() => setIsArrow(true)}>{isArrow && <DownArrow icon={faArrowAltCircleDown} />}</Sun>
    </AnimationContainer>
  );
}

export default Animation;