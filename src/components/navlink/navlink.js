import * as React from 'react';

import * as styles from './navlink.module.css';

function NavLink({ htmlId, title }) {
  return (
    <li className={`${styles.navItem}`}>
      <a className={`${styles.navLink}`} href={`#${htmlId}`}>
        {title}
      </a>
    </li>
  );
}

export default NavLink;
