import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm, FormProvider} from 'react-hook-form';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';

import {validation, defaultValues} from './form';
import {ILoginProps} from './types';
import {logInUser} from '../../../redux/auth/thunks';
import InputControl from '../../../components/common/form/InputControl';
import Button from '../../../components/common/Button/Button';
import {ForgotPassLink, SignLink} from './styles';
import {FORGOT_PATH, SIGN_IN_PATH} from '../../../Routes/constants';
import {useAppDispatch} from '../../../redux/store';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const methods = useForm<ILoginProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    const onSubmit = (data: ILoginProps) => {
        dispatch(logInUser(data)).then((res) => {
            res && navigate('/');
        });
    };

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container flexDirection="column" justifyContent="center" mt={4}>
                        <Grid item pb={9} display="flex" justifyContent="center">
                            <h2>Log In</h2>
                        </Grid>
                        <Grid item>
                            <Grid container flexDirection="column" justifyContent="center">
                                <Grid item pb={2}>
                                    <InputControl control={control} label="Email adress" name="email" fullWidth />
                                </Grid>
                                <Grid item pb={2}>
                                    <InputControl
                                        control={control}
                                        label="Password"
                                        type="password"
                                        name="password"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item pb={3}>
                                    <ForgotPassLink to={FORGOT_PATH}>Forgot password?</ForgotPassLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center" direction="column">
                            <Grid item pb={3}>
                                <Button variant="outlined" type="submit" color="primary">
                                    Login
                                </Button>
                            </Grid>
                            <Grid item display="flex" justifyContent="center" ml={1}>
                                <SignLink to={SIGN_IN_PATH}> Don’t have an account? Sign up</SignLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    );
};

export default Login;
