import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Button, Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';

import {validation, defaultValues} from './form';
import {ISignInProps} from './types';
import InputControl from '../../../components/common/form/InputControl';
import {signInUser} from '../../../redux/auth/thunks';
import {useAppDispatch} from '../../../redux/store';

const SignIn = () => {
    const dispatch = useAppDispatch();

    const methods = useForm<ISignInProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    const onSubmit = (data: ISignInProps) => {
        dispatch(signInUser(data));
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container flexDirection="column" alignItems="center">
                    <Grid item xs={6}>
                        <InputControl control={control} label="Your name" name="name" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputControl control={control} label="Email address" name="address" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputControl control={control} label="Password" type="password" name="password" fullWidth />
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
