import {LoadScript} from '@react-google-maps/api';
import {Grid} from '@mui/material';
import {FormProvider, UseFormReturn} from 'react-hook-form';

import GoogleAutocompleteControl from '../../components/common/form/GoogleAutocompleteControl';
import Map from '../../components/Map';
import {IPlan} from '@/app/plan/types';
import {libraries} from './constants';
import SearchForm from '../search-form/search-form';

type Props = {
    children?: React.ReactNode;
    methods: UseFormReturn<IPlan, any>;
};

const GoogleMapsLoader: React.FC<Props> = ({children, methods}) => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY || '';

    return (
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={libraries} loadingElement={<div>Loading...</div>}>
            <Grid container height="100%">
                <Grid item xs={4} px={2}>
                    <FormProvider {...methods}>
                        <Grid container>
                            <Grid item xs={10}>
                                <GoogleAutocompleteControl name="search" control={methods.control} />
                                <SearchForm />
                            </Grid>
                        </Grid>
                    </FormProvider>
                </Grid>
                <Grid item xs={8}>
                    <Map />
                </Grid>
            </Grid>
            {children}
        </LoadScript>
    );
};

export default GoogleMapsLoader;
