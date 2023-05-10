import React from 'react';
import {Outlet} from 'react-router-dom';
import {Grid} from '@mui/material';

import Navigation from '../../components/common/Navigation/Navigation';
import ImgCarousel from '../../components/common/ImgCarousel/ImgCarousel';
import {ContainerDiv} from './styles';

const AuthLayout = () => {
    return (
        <>
            <Navigation />
            <Grid container>
                <ImgCarousel />
                <ContainerDiv>
                    <Outlet />
                </ContainerDiv>
            </Grid>
        </>
    );
};

export default AuthLayout;
