import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuBox = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  img {
    border-radius: 50%;
    margin: 20px;
  }
`;

export const PhonebookLink = styled(NavLink)`
  color: #78a4f7;
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  padding: 5px 25px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  font-family: 'Comfortaa', cursive;
  margin: 0 auto;

  &.active {
    color: #21d3da7f;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #50f595e2;
  }
`;
