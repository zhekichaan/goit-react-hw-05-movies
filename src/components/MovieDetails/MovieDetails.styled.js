import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const Poster = styled.img`
  width: 250px;
`

export const DetailsLink = styled(NavLink)`
  border: 1px solid grey;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
    border: 1px solid;
  }
`;