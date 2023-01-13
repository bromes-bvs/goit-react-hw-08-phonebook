import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavigation = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  nav {
    display: flex;
    align-items: center;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: 4px;
  background-color: #3f51b5;
  display: inline-flex;
  align-items: center;

  svg {
    width: 35px;
    height: 28px;
  }

  &.active {
    color: #3f51b5;
    background-color: #fff;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #03023b73;
  }
`;

export const StyledDetailLink = styled(NavLink)`
  color: #0a5efa;
  text-decoration: none;
  font-size: 36px;
  font-weight: 400;
  padding: 5px 25px;
  border-radius: 4px;
  background-color: #ffffff;
  display: inline-flex;
  align-items: center;
  margin: 0 auto;

  &.active {
    color: #0a144963;
    background-color: #1e72f189;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f5505073;
  }
`;
