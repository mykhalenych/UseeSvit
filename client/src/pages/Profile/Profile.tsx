/* eslint-disable no-console */
import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {Grid, Typography} from '@mui/material';
import {useAppDispatch} from '../../redux/store';
import {yupResolver} from '@hookform/resolvers/yup';
import {nameValidation, defaultNameValue, passwordValidation, defaultPasswordValue} from './form';
import {NameProps, PasswordProps} from './types';
import InputControl from '../../components/common/form/InputControl';
import Button from '../../components/common/Button';
import {changeUserName, changeUserPassword} from '../../redux/profile/thunks';

const Profile = () => {
    const dispatch = useAppDispatch();

    const nameMethods = useForm<NameProps>({
        resolver: yupResolver(nameValidation),
        defaultValues: defaultNameValue,
    });

    const passwordMethods = useForm<PasswordProps>({
        resolver: yupResolver(passwordValidation),
        defaultValues: defaultPasswordValue,
    });

    const onNameSubmit = (data: NameProps) => {
        dispatch(
            changeUserName({
                newName: data.newName,
            }),
        );

        nameMethods.reset();
    };

    const onPasswordSubmit = (data: PasswordProps) => {
        dispatch(
            changeUserPassword({
                password: data.password,
                newPassword: data.newPassword,
                passwordConfirmation: data.passwordConfirmation,
            }),
        );

        passwordMethods.reset();
    };

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Grid container spacing={2} px={2} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h2">Profile</Typography>
                </Grid>
                <FormProvider {...nameMethods}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <form onSubmit={nameMethods.handleSubmit(onNameSubmit)}>
                                    <Grid container justifyContent="space-between" alignItems="center">
                                        <Grid item xs={8}>
                                            <InputControl
                                                control={nameMethods.control}
                                                label="New name"
                                                name="newName"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button type="submit" variant="contained" color="primary" minWidth={190}>
                                                Change name
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </FormProvider>
                <FormProvider {...passwordMethods}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <form onSubmit={passwordMethods.handleSubmit(onPasswordSubmit)}>
                                    <Grid container justifyContent="space-between" alignItems="center">
                                        <Grid item xs={8}>
                                            <InputControl
                                                control={passwordMethods.control}
                                                label="Current password"
                                                type="password"
                                                name="password"
                                                fullWidth
                                            />
                                            <InputControl
                                                control={passwordMethods.control}
                                                label="New password"
                                                type="password"
                                                name="newPassword"
                                                fullWidth
                                            />
                                            <InputControl
                                                control={passwordMethods.control}
                                                label="New password"
                                                type="password"
                                                name="passwordConfirmation"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Button type="submit" variant="contained" color="primary" minWidth={190}>
                                                Change password
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </FormProvider>
            </Grid>
        </div>
    );
};

export default Profile;
