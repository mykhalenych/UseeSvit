import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {noop} from 'lodash';
import {Button, Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';

import {validation, defaultValues} from './form';
import {ISignInProps} from './types';
import InputControl from '../../../components/common/form/InputControl';

const SignIn = () => {
    const methods = useForm<ISignInProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(noop)} noValidate>
                <Grid container flexDirection="column" alignItems="center">
                    <Grid item xs={6}>
                        <InputControl control={control} name="name" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputControl control={control} name="password" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Button type="submit" variant="contained" color="primary">
                            Sign In
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default SignIn;
