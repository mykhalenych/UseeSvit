import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Grid} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import {noop} from 'lodash';

import {validation, defaultValues} from './form';
import {ILoginProps} from './types';
import Modal from '../../../components/common/Modal/Modal';
import InputControl from '../../../components/common/form/InputControl';
import Button from '../../../components/common/Button/Button';

const Login = () => {
    const methods = useForm<ILoginProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    return (
        // <Modal open color="primary">
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(noop)} noValidate>
                <Grid container flexDirection="column" alignItems="center">
                    <Grid item xs={6}>
                        <InputControl control={control} label="Email adress" name="email" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <InputControl control={control} label="Password" type="password" name="password" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" type="submit" color="primary">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
        // </Modal>
    );
};

export default Login;
