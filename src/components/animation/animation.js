import * as React from 'react';
import styled from 'styled-components';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import RippleButton from '../ripplebutton/ripplebutton';

import { SunStyles, Planet, DownArrow, AnimationContainer, InnerOrbit, OuterOrbitStyles } from './styles'

const Sun = styled.div`${SunStyles}`;
const OuterOrbit = styled.div`${OuterOrbitStyles}`;

const Animation = () => {
  const [isArrow, setIsArrow] = React.useState(false);
  return (
    <AnimationContainer>
      <OuterOrbit>
        {!isArrow && <Planet /> }
      </OuterOrbit>
      <InnerOrbit />
      <Sun isArrow={isArrow} onAnimationEnd={() => setIsArrow(true)}>
        {isArrow && <DownArrow icon={faArrowAltCircleDown} />}
      </Sun>
    </AnimationContainer>
  );
}

export default Animation;