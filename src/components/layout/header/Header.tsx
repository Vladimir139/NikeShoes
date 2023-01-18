import React, {FC} from 'react';
import Navigation from "./navigation/Navigation";
import {Logo, HeaderWrapper} from "./HeaderElements";
import {Container} from "@assets/styles/globalElements";

const Header:FC = () => {
    return (
        <>
            <Container>
                <HeaderWrapper>
                    <Logo>Nike Shoes</Logo>
                    <Navigation />
                </HeaderWrapper>
            </Container>
        </>
    );
};

export default Header;