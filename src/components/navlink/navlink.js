import * as React from 'react';

import {
  NavItem, NavLinkAnchor
} from './styles';

function NavLink({ htmlId, title }) {
  return (
    <NavItem>
      <NavLinkAnchor href={`#${htmlId}`}>
        {title}
      </NavLinkAnchor>
    </NavItem>
  );
}

export default NavLink;
