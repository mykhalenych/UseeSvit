import React from 'react';
import {Outlet} from 'react-router-dom';
import {IconButton} from '@mui/material';

import {ReactComponent as LogoIcon} from '../../assets/icons/logo.svg';
import {ReactComponent as ProfileIcon} from '../../assets/icons/profile.svg';

import {BgDiv, Main, Nav, Footer, ImgWrap, StyledLink} from './styles';
import {LOGIN_PATH} from '../../Routes/constants';

const MainLayout = () => {
    return (
        <BgDiv>
            <Nav>
                <LogoIcon />

                <StyledLink to={LOGIN_PATH}>
                    <IconButton color="primary">
                        <ProfileIcon />
                    </IconButton>
                </StyledLink>
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
