import React from 'react';
import {Grid, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

import Button from '../../components/common/Button';
import {PLAN_PATH} from '../../Routes/constants';

const Main = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(PLAN_PATH);
    };

    return (
        <Grid container alignItems="center" height="100%" flexDirection="column" py={2}>
            <Grid item xs={6}>
                <Typography variant="h2">Plan your trip</Typography>
            </Grid>
            <Grid item xs={6}>
                <Button onClick={handleRedirect} color="primary">
                    Plan your trip
                </Button>
            </Grid>
        </Grid>
    );
};

export default Main;
