import React from 'react';
import {Outlet} from 'react-router-dom';

import LogoIcon from '../../components/icons/LogoIcon';
import ProfileIcon from '../../components/icons/ProfileIcon';

import {BgDiv, Main, Nav, Footer, ImgWrap} from './styles';

const MainLayout = () => {
    return (
        <BgDiv>
            <Nav>
                <LogoIcon />
                <ProfileIcon />
            </Nav>
            <Main>
                <ImgWrap />
                <Outlet />
                <Footer />
            </Main>
        </BgDiv>
    );
};
export default MainLayout;
