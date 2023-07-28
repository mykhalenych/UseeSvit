import {LoadScript} from '@react-google-maps/api';
import {FormProvider, UseFormReturn} from 'react-hook-form';
import {Grid} from '@mui/material';

import FieldArray from '@/app/plan/FieldArray';
import Map from '@/app/components/Map';
import {IPlan} from '@/app/plan/types';
import {libraries} from './constants';

type Props = {
    children?: React.ReactNode;
    methods: UseFormReturn<IPlan, any>;
};

const GoogleMapsLoader: React.FC<Props> = ({children, methods}) => {
    const googleMapsApiKey = process.env.GOOGLE_API_KEY || '';

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries} loadingElement={<div>Loading...</div>}>
            <Grid container height="100%">
                <Grid item xs={6} px={2}>
                    <FormProvider {...methods}>
                        <FieldArray />
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
