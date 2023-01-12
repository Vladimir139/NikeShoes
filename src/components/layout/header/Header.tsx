import React, {FC} from 'react';
import Navigation from "./navigation/Navigation";
import {Logo} from "./HeaderElements";
import {Container} from "@assets/styles/globalElements";

const Header:FC = () => {
    return (
        <>
            <Container>
                <Logo>Nike Shoes</Logo>
                <Navigation />
            </Container>
        </>
    );
};

export default Header;