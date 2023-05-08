import React from 'react';
import {Outlet} from 'react-router-dom';
import {IconButton} from '@mui/material';

import LogoIcon from '../../components/icons/LogoIcon';
import ProfileIcon from '../../components/icons/ProfileIcon';

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
