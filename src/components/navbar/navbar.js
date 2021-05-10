/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import NavbarContext from '../../contexts/NavbarContext';
import NavLink from '../navlink/navlink';
import { colors, screenSizes } from '../../utils/constants';
import { links, lightMenuIcon, lightCloseIcon } from '../../config/navbar';
import { Nav, ListStyles, MenuButton } from './styles';

const List = styled.ul`${ListStyles}`;

function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [, setWindowScrollY] = useState(window.scrollY);
  const [isNavbarDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentNavlink = React.useContext(NavbarContext);

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
      false,
    );
  });

  const isMobile = windowInnerWidth <= screenSizes.mobile;

  return (
    <Nav
      style={{
        background: isNavbarDark || isMobileMenuOpen ? colors.grey : colors.darkColor,
        opacity: isScrolling ? (isNavbarDark ? 0.5 : 0.1) : 1,
      }}
    >
      <List
        isMobileMenuOpen={isMobileMenuOpen}
        id="navlink-wrapper"
        style={{ background: `${isMobileMenuOpen ? colors.grey : colors.transparent}` }}
      >
        {links.map((link) => (
          <NavLink isCurrent={link.title === currentNavlink} htmlId={link.htmlId} title={link.title} key={`navlink-${link.title}`} />
        ))}
      </List>
      {isMobile && (
      <MenuButton
        type="button"
        aria-label="open-or-close-mobile-menu"
        style={{ backgroundImage: `url(${isMobileMenuOpen ? lightCloseIcon : lightMenuIcon})` }}
        onClick={handleMenuIconClick}
      />
      )}
    </Nav>
  );
}

export default Navbar;
