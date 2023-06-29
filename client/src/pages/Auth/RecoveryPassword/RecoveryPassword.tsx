import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Grid, Typography} from '@mui/material';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useAppDispatch} from '../../../redux/store';
import {newPassword} from '../../../redux/auth/thunks';
import InputControl from '../../../components/common/form/InputControl';
import {PasswordProps} from './types';
import {defaultValues, validation} from './form';
import Button from '../../../components/common/Button';

const RecoveryPassword = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {resetToken} = useParams();

    const methods = useForm<PasswordProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    const handleRedirect = (path: string) => {
        navigate(path);
    };

    const onSubmit = (data: PasswordProps) => {
        if (resetToken) {
            const dataWithToken = {...data, resetToken};

            dispatch(newPassword(dataWithToken)).then((res) => res.meta.requestStatus === 'fulfilled');
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container px={2} spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">Create new password</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl
                            control={control}
                            label="New password"
                            type="password"
                            name="newPassword"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl
                            control={control}
                            label="Confirm password"
                            type="password"
                            name="confirmPassword"
                            fullWidth
                        />
                    </Grid>
                    <Grid container item xs={12} justifyContent="space-between">
                        <Button type="submit" variant="contained" color="primary" minWidth={100}>
                            Save
                        </Button>
                        <Button onClick={() => handleRedirect('/')} color="primary" minWidth={100}>
                            Cancel
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default RecoveryPassword;
