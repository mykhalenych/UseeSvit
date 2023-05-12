import React from 'react';
import {Grid, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import Button from '../../../components/common/Button';
import {LOGIN_PATH} from '../../../Routes/constants';

const CheckEmail = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(LOGIN_PATH);
    };

    return (
        <Grid container spacing={2} px={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h3">Check your email, we sent you an information.</Typography>
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
                <Button onClick={handleRedirect} color="primary" minWidth={180}>
                    Go to login
                </Button>
            </Grid>
        </Grid>
    );
};

export default CheckEmail;
