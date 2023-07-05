import React from 'react';
import {LoadScript} from '@react-google-maps/api';
import {Grid} from '@mui/material';
import {FormProvider, UseFormReturn} from 'react-hook-form';

import GoogleAutocompleteControl from '../../components/common/form/GoogleAutocompleteControl';
import Map from '../../components/Map';
import {IPlan} from '../../pages/Plan/types';
import {libraries} from './constants';

type Props = {
    children?: React.ReactNode;
    methods: UseFormReturn<IPlan, any>;
};

const GoogleMapsLoader: React.FC<Props> = ({children, methods}) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY || '';

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries} loadingElement={<div>Loading...</div>}>
            <Grid container height="100%">
                <Grid item xs={6} px={2}>
                    <FormProvider {...methods}>
                        <form>
                            <Grid container>
                                <Grid item xs={6}>
                                    <GoogleAutocompleteControl name="search" control={methods.control} />
                                </Grid>
                            </Grid>
                        </form>
                    </FormProvider>
                </Grid>
                <Grid item xs={6}>
                    <Map />
                </Grid>
            </Grid>
            {children}
        </LoadScript>
    );
};

export default GoogleMapsLoader;
