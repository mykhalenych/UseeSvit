import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Grid, Typography} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigate} from 'react-router-dom';

import {validation, defaultValues} from './form';
import {ISignInProps} from './types';
import InputControl from '../../../components/common/form/InputControl';
import Button from '../../../components/common/Button';
import {signInUser} from '../../../redux/auth/thunks';
import {useAppDispatch} from '../../../redux/store';
import {CHECK_EMAIL_PATH, LOGIN_PATH} from '../../../Routes/constants';

const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const methods = useForm<ISignInProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    const onSubmit = (data: ISignInProps) => {
        dispatch(signInUser(data)).then((res) => res.meta.requestStatus === 'fulfilled' && navigate(CHECK_EMAIL_PATH));
    };

    const handleRedirect = () => {
        navigate(LOGIN_PATH);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} px={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Sign In</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl control={control} label="Your name" name="name" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl control={control} label="Email" name="email" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl control={control} label="Password" type="password" name="password" fullWidth />
                    </Grid>
                    <Grid container item xs={12} justifyContent="space-between">
                        <Button onClick={handleRedirect} color="primary" minWidth={120}>
                            Login
                        </Button>
                        <Button type="submit" variant="contained" color="primary" minWidth={120}>
                            Sign In
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default SignIn;
