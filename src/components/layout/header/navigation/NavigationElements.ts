import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Nav = styled.nav`
  background: rgba(224, 217, 231, .77);
  border-radius: 30px;
  justify-content: center;
  box-shadow: 1px 1px 4px grey;
  display: flex;
  position: relative;
  margin: 10px;
  flex-wrap: wrap;

  &::before {
    content: "";
    width: 60px;
    height: 60px;
    position: absolute;
    background-image: url("/img/header/logoNike.svg");
    left: 20px;
  }
  
  @media (max-width: 801px) {
    &::before {
      display: none;
    }
  }
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
  font-weight: 600;
  text-align: center;
  padding: 15px;
  position: relative;

  span {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    color: #1267e5;
    top: 0;
    right: 8px;
    font-size: 20px;
  }

  &::before {
    content: "";
    position: absolute;
    height: 3px;
    left: 51%;
    right: 51%;
    bottom: 0;
    transition-property: left, right;
    transition-duration: .3s;
    transition-timing-function: ease;
    background: #6f2f40;

    &::before:hover {
      left: 0;
      right: 0;
    }
  }

  &:last-child {
    width: 65px;

    &::after {
      content: "";
      position: absolute;
      width: 35px;
      height: 35px;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("/img/header/order.svg");
      left: 15px;
      top: 15px;
    }
  }

  @media (max-width: 501px) {
    font-size: 15px;

    &:last-child {
      width: 55px;

      &::after {

        width: 25px;
        height: 25px;

      }
    }
  }
`