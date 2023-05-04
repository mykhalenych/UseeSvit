import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import {noop} from 'lodash';
import {validation} from './form';

import InputControl from '../../../components/common/form/InputControl';
import Button from '../../../components/common/Button/Button';
import signInImage from './image/forgotPassImage.png';

import {LoginImg, Header, ContainerDiv} from './styles';

const ForgotPassword = () => {
    const methods = useForm({
        resolver: yupResolver(validation),
    });
    const {handleSubmit, control} = methods;

    return (
        <ContainerDiv>
            <>
                <LoginImg src={signInImage} alt="mountains" />
                <Grid container flexDirection="column">
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(noop)} noValidate>
                            <Grid container justifyContent="center" height="100%">
                                <Header>Forgot your password?</Header>
                            </Grid>
                            <Grid container justifyContent="center">
                                <InputControl control={control} label="Email adress" name="email" fullWidth />
                                <Grid item justifyContent="center">
                                    <Button variant="outlined" type="submit" color="primary">
                                        Send instructions
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </FormProvider>
                </Grid>
            </>
        </ContainerDiv>
    );
};

export default ForgotPassword;
