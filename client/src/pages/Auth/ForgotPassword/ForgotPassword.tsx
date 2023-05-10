import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useForm, FormProvider} from 'react-hook-form';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import {validation} from './form';

import {CHECK_EMAIL_PATH} from '../../../Routes/constants';
import {IForgotPassProps} from './types';
import {forgotPassword} from '../../../redux/auth/thunks';
import InputControl from '../../../components/common/form/InputControl';
import Button from '../../../components/common/Button/Button';
import {useAppDispatch} from '../../../redux/store';

const ForgotPassword = () => {
    const methods = useForm<IForgotPassProps>({
        resolver: yupResolver(validation),
    });
    const {handleSubmit, control} = methods;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit = (data: IForgotPassProps) => {
        dispatch(forgotPassword(data)).then((res) => {
            res && navigate(CHECK_EMAIL_PATH);
        });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container flexDirection="column" justifyContent="center">
                    <Grid item justifyContent="center" mt={4} pb={9}>
                        <h2>Forgot your password?</h2>
                    </Grid>
                    <Grid item justifyContent="center" pb={4}>
                        <InputControl control={control} label="Email adress" name="email" fullWidth />
                    </Grid>
                    <Grid item justifyContent="center">
                        <Button variant="outlined" type="submit" color="primary">
                            Send instructions
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default ForgotPassword;
