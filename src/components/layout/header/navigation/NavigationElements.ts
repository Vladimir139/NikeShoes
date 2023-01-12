import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Nav = styled.nav`
  background: rgba(224,217,231,.77);
  border-radius: 30px;
  justify-content: center;
  box-shadow: 1px 1px 4px grey;
  display: flex;
`

export const ListLinks = styled.ul`
  display: flex;
`

export const NikeLogo = styled.img`
    
`

export const NavLinkHeader = styled(NavLink)`
  box-shadow: 0 0 1px transparent;
  color: #000;
  font-family: "Merienda One", cursive;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 15px;
`