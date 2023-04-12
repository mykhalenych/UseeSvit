import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {noop} from 'lodash';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';

import {validation, defaultValues} from './form';
import {ILoginProps} from './types';
import InputControl from '../../../components/common/form/InputControl';

const Login = () => {
    const methods = useForm<ILoginProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(noop)} noValidate>
                <Grid container>
                    <Grid item xs={6}>
                        <InputControl control={control} name="name" fullWidth />
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default Login;
