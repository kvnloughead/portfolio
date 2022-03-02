import * as React from 'react';
import styled from 'styled-components';

import { NavItem, NavLinkAnchorStyles } from './styles';

const NavLinkAnchor = styled.a`
  ${NavLinkAnchorStyles}
`;

function NavLink({ link, title, isCurrent }) {
  return (
    <NavItem>
      <NavLinkAnchor isCurrent={isCurrent} href={link}>
        {title}
      </NavLinkAnchor>
    </NavItem>
  );
}

export default NavLink;
