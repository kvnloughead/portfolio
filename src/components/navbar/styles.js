import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 17px;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  z-index: 4;
  position: fixed;
  top: 0;
  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1), background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  @media screen and (max-width: 767.5px) {
    justify-content: flex-end;
  `;

export const ListStyles = css`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background: transparent;
  @media screen and (max-width: 767.5px) {
    visibility: ${(props) => (props && props.isMobileMenuOpen ? 'visible' : 'hidden')};
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
