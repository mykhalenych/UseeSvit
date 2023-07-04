import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Grid} from '@mui/material';

import {IPlan} from './types';
import {defaultValues, validation} from './form';
import GoogleAutocompleteControl from '../../components/common/form/GoogleAutocompleteControl';

const Plan = () => {
    const methods = useForm<IPlan>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {control} = methods;

    return (
        <FormProvider {...methods}>
            <form>
                <Grid container>
                    <Grid item xs={6}>
                        <GoogleAutocompleteControl name="search" control={control} />
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default Plan;
