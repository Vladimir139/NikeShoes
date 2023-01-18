import React, {FC} from 'react';
import {Container} from "@assets/styles/globalElements";
import {
    Copyright,
    DevolopTitle,
    FooterWrapper,
    LineHr,
    LinkPeron,
    SocialNetworks
} from "./FooterElements";
import {socials} from "./socials/data";
import Social from "./socials/Social";

const Footer:FC = () => {
    return (
        <>
            <LineHr></LineHr>
            <Container>
                <FooterWrapper>
                    <DevolopTitle>
                        Developer: <LinkPeron>Zenovsky Vladimir</LinkPeron>
                    </DevolopTitle>

                    <SocialNetworks>
                        {socials.map(item => {
                            return <Social img={item.img} alt={item.alt} key={item.key}/>
                        })}
                    </SocialNetworks>

                    <Copyright>
                        Copyright © Nike Shoes Template
                    </Copyright>
                </FooterWrapper>
            </Container>
        </>
    );
};

export default Footer;