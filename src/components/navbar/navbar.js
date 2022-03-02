/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import NavLink from '../navlink/navlink';
import { colors, screenSizes } from '../../utils/constants';
import { links, lightMenuIcon, lightCloseIcon } from '../../config/navbar';
import { Nav, ListStyles, MenuButton } from './styles';

const List = styled.ul`
  ${ListStyles}
`;

function Navbar() {
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);
  const [, setWindowScrollY] = useState(window.scrollY);
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

  const isMobile = windowInnerWidth <= screenSizes.mobile;

  return (
    <Nav
      style={{
        background: isMobileMenuOpen ? colors.grey : colors.darkColor,
        opacity: isScrolling ? 0.3 : 1,
      }}
    >
      <List
        isMobileMenuOpen={isMobileMenuOpen}
        id="navlink-wrapper"
        style={{
          background: `${isMobileMenuOpen ? colors.grey : colors.transparent}`,
        }}
      >
        {links.map((link) => (
          <NavLink
            link={link.link}
            title={link.title}
            key={`navlink-${link.title}`}
          />
        ))}
      </List>
      {isMobile && (
        <MenuButton
          type="button"
          aria-label="open-or-close-mobile-menu"
          style={{
            backgroundImage: `url(${
              isMobileMenuOpen ? lightCloseIcon : lightMenuIcon
            })`,
          }}
          onClick={handleMenuIconClick}
        />
      )}
    </Nav>
  );
}

export default Navbar;
