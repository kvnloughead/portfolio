import styled, { css } from 'styled-components';

import { colors } from '../../utils/constants';

export const NavItem = styled.li`
  margin-right: 36px;
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 767.5px) {
    margin-right: 0;
    margin-bottom: 18px;
    &:last-child {
        margin-bottom: 0;
    }
  }
`;

export const NavLinkAnchorStyles = css`
  text-transform: uppercase;
  text-decoration: none;
  font-style: normal;
  font-weight: 800;
  margin: 0;
  padding: 0;
  vertical-align: super;
  font: 20px 'opensans-bold', sans-serif;
  letter-spacing: 2.5px;
  color: ${(props) => (props && props.isCurrent ? `${colors.accent}` : `${colors.white}`)};

  &:focus {
    outline: ${colors.white} 1px solid;
  }

  @media screen and (max-width: 767.5px) {
    font-size: 12px;
  }

`;
