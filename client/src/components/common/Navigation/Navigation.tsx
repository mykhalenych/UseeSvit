import React from 'react';
import {redirect} from 'react-router-dom';
import {Grid, IconButton} from '@mui/material';

import {LOGIN_PATH} from '../../../Routes/constants';
import ProfileIcon from '../../icons/ProfileIcon';
import LogoIcon from '../../icons/LogoIcon';
import DarkModeIcon from '../../icons/DarkModeIcon';
import {StyledLink, BackgroundDiv} from './styles';
import PlanetIcon from '../../icons/PlanetIcon';

const Navigation = () => {
    const handleRedirectToHome = () => {
        redirect('/');
    };
    return (
        <BackgroundDiv>
            <Grid container justifyContent="space-between">
                <Grid item ml={6} pt={2}>
                    <IconButton onClick={handleRedirectToHome} color="primary">
                        <PlanetIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <DarkModeIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <LogoIcon />
                </Grid>
                <Grid item mr={6} pt={2}>
                    <StyledLink to={LOGIN_PATH}>
                        <IconButton color="primary">
                            <ProfileIcon />
                        </IconButton>
                    </StyledLink>
                    <StyledLink to={LOGIN_PATH}>
                        <IconButton color="primary">
                            <ProfileIcon />
                        </IconButton>
                    </StyledLink>
                </Grid>
            </Grid>
        </BackgroundDiv>
    );
};

export default Navigation;
