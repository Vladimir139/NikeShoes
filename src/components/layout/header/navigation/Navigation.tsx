import React, {FC} from 'react';
import {ListLinks, Nav, NavLinkHeader, NikeLogo} from "./NavigationElements";

const Navigation:FC = () => {
    return (
        <Nav>
            <NikeLogo src="/img/logoNike.svg"></NikeLogo>
            <ListLinks>
                <NavLinkHeader to="/" >Home</NavLinkHeader>
                <NavLinkHeader to="about" >About</NavLinkHeader>
                <NavLinkHeader to="products" >Products</NavLinkHeader>
                <NavLinkHeader to="order" ></NavLinkHeader>
            </ListLinks>
        </Nav>
    );
};

export default Navigation;
