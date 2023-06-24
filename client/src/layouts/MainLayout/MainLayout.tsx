import React from 'react';
import {Outlet, Link} from 'react-router-dom';
import {IconButton} from '@mui/material';

import LogoIcon from '../../components/icons/LogoIcon';
import ProfileIcon from '../../components/icons/ProfileIcon';

import {BgDiv, Main, Nav, Footer, ImgWrap} from './styles';
import {LOGIN_PATH} from '../../Routes/constants';

const MainLayout = () => {
    return (
        <BgDiv>
            <Nav>
                <LogoIcon />

                <Link to={LOGIN_PATH}>
                    <IconButton color="primary">
                        <ProfileIcon />
                    </IconButton>
                </Link>
            </Nav>
            <Main>
                <ImgWrap />
                <Outlet />
            </Main>
            <Footer />
        </BgDiv>
    );
};
export default MainLayout;
