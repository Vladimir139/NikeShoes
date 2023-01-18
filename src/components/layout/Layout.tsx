import React, { FC } from 'react';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    );
};

export default Layout;
