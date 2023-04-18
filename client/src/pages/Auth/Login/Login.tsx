import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Button, Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import {noop} from 'lodash';

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
                <Grid container flexDirection="column" alignItems="center">
                    <Grid item xs={6}>
                        <InputControl control={control} name="email" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputControl control={control} name="password" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default Login;
