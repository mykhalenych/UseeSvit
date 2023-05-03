import React from 'react';
import {redirect} from 'react-router-dom';
import {useForm, FormProvider} from 'react-hook-form';
import {Grid} from '@mui/material';

import {yupResolver} from '@hookform/resolvers/yup';

import {validation, defaultValues} from './form';
import {ILoginProps} from './types';
import {logInUser} from '../../../redux/auth/thunks';
import InputControl from '../../../components/common/form/InputControl';
import Button from '../../../components/common/Button/Button';
import {LoginImg, Header, ForgotPassLink, SignLink, ContainerDiv} from './styles';
import signInImage from './image/signInImage.png';
import {FORGOT_PATH, SIGN_IN_PATH} from '../../../Routes/constants';
import {useAppDispatch} from '../../../redux/store';

const Login = () => {
    const dispatch = useAppDispatch();
    const methods = useForm<ILoginProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    const onSubmit = (data: ILoginProps) => {
        dispatch(logInUser(data)).then((res) => {
            res ? redirect('/') : Error('error');
        });
    };

    return (
        <ContainerDiv>
            <>
                <LoginImg src={signInImage} alt="mountains" />
                <Grid container flexDirection="column">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Grid container justifyContent="center" height="100%">
                                <Header>Log In</Header>
                                <InputControl control={control} label="Email adress" name="email" fullWidth />
                                <InputControl
                                    control={control}
                                    label="Password"
                                    type="password"
                                    name="password"
                                    fullWidth
                                />
                                <ForgotPassLink to={FORGOT_PATH}>Forgot password?</ForgotPassLink>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Button variant="outlined" type="submit" color="primary">
                                    Login
                                </Button>
                                <SignLink to={SIGN_IN_PATH}> Don’t have an account? Sign up</SignLink>
                            </Grid>
                        </form>
                    </FormProvider>
                </Grid>
            </>
        </ContainerDiv>
    );
};

export default Login;
