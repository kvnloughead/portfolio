/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { useEffect, useState } from 'react';
import jQuery from 'jquery';

import NavLink from '../navlink/navlink';
import { colors, screenSizes } from '../../utils/constants';
import { links, lightMenuIcon, lightCloseIcon } from '../../config/navbar';
import * as styles from './navbar.module.css';

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [, setWindowScrollY] = useState(window.scrollY);
  const [isNavbarDark, setIsNavbarDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollY = () => {
    setWindowScrollY(window.scrollY);
  };

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
    if (window.innerWidth > 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleMenuIconClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    let scrollingTimer;
    window.addEventListener(
      'scroll',
      () => {
        setIsScrolling(true);
        handleScrollY();
        window.clearTimeout(scrollingTimer);
        scrollingTimer = setTimeout(() => {
          setIsScrolling(false);
        }, 250);
      },
      false
    );
  });

  // useEffect(() => {

  //   jQuery(document).ready(($) => {
  //     const sections = $('header, section');
  //     const navlinks = $('#navlink-wrapper a');

  //     sections.waypoint({
  //       handler(event) {
  //         let activeSection;

  //         activeSection = $(this);
  //         if (event === 'up') activeSection = activeSection.prev();
  //         const activeLink = $(`#navlink-wrapper a[href="#${activeSection.attr('id')}"]`);
  //         setIsNavbarDark(activeSection.context.id === 'projects');

  //         navlinks.css('color', colors.white);
  //         activeLink.css('color', colors.accent);
  //       },
  //       offset: '5%',
  //     });
  //   });
  // });

  const isMobile = windowInnerWidth <= screenSizes.mobile;

  return (
    <nav
      style={{
        background: isNavbarDark || isMobileMenuOpen ? colors.grey : colors.darkColor,
        opacity: isScrolling ? (isNavbarDark ? 0.5 : 0.1) : 1,
      }}
      className={`${styles.navbar}`}
    >
      <ul
        id="navlink-wrapper"
        style={{ background: `${isMobileMenuOpen ? colors.grey : colors.transparent}`}}
        className={`${styles.navbar__links} ${isMobileMenuOpen ? styles.navbar__links_open : ''}`}
      >
        {links.map((link) => (
          <NavLink htmlId={link.htmlId} title={link.title} key={`navlink-${link.title}`} />
        ))}
      </ul>
      {isMobile && (
        <button
          type="button"
          aria-label="open-or-close-mobile-menu"
          className={styles.navbar__openMenuBtn}
          style={{ backgroundImage: `url(${isMobileMenuOpen ? lightCloseIcon : lightMenuIcon})` }}
          onClick={handleMenuIconClick}
        />
      )}
    </nav>
  );
}

export default Navbar;
