import React, {FC} from 'react';
import {ListLinks, Nav, NavLinkHeader} from "./NavigationElements";
import '@assets/styles/activenav.css'
import {useTypedSelector} from "@hooks/useTypedSelector";
const Navigation:FC = () => {
  const cart = useTypedSelector(state => state.basket.cartItems)

    return (
        <Nav>
            <ListLinks>
                <NavLinkHeader to="/" >Home</NavLinkHeader>
                <NavLinkHeader to="about" >About</NavLinkHeader>
                <NavLinkHeader to="products" >Products</NavLinkHeader>
                <NavLinkHeader to="basket" >
                  {cart.length ? <span>{cart.length}</span> : ''}
                </NavLinkHeader>
            </ListLinks>
        </Nav>
    );
};

export default Navigation;
