import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  padding: 17px;
  width: 100%;
  margin: auto;
  box-sizing: border-box;
  z-index: 4;
  position: fixed;
  top: 0;
  transition: opacity .3s ease-in-out;
  box-shadow: 0px 2px 5px rgb(59 67 88 / 80%);
  @media screen and (max-width: 767.5px) {
    justify-content: flex-end;
  `;

export const ListStyles = css`
  display: flex;
  max-width: 1280px;
  margin: auto;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  background: transparent;
  width: 100%;
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
  @media screen and (max-width: 767.5px) {
    visibility: ${(props) =>
      props && props.isMobileMenuOpen ? 'visible' : 'hidden'};
    flex-direction: column;
    position: fixed;
    width: 100%;
    top: 48px;
    right: 0;
    padding-bottom: 25px;
    align-items: center;
  }
`;

export const MenuButton = styled.button`
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 36px;
  height: 36px;
  border: none;
  right: 20px;
  top: 17px;
`;
