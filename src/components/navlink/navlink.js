import * as React from 'react';
import styled from 'styled-components';

import { NavItem, NavLinkAnchorStyles } from './styles';

const NavLinkAnchor = styled.a`
  ${NavLinkAnchorStyles}
`;

function NavLink({ htmlId, title, isCurrent }) {
  return (
    <NavItem>
      <NavLinkAnchor isCurrent={isCurrent} href={`#${htmlId}`}>
        {title}
      </NavLinkAnchor>
    </NavItem>
  );
}

export default NavLink;
