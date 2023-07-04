import React from 'react';
import {Grid} from '@mui/material';
import {Outlet} from 'react-router-dom';

import Map from '../../components/Map';

const PlanLayout = () => {
    return (
        <Grid container height="100%">
            <Grid item xs={6} px={2}>
                <Outlet />
            </Grid>
            <Grid item xs={6}>
                <Map />
            </Grid>
        </Grid>
    );
};

export default PlanLayout;
