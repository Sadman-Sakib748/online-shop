import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Component/Navber/Navber';
import Footer from '../Component/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;