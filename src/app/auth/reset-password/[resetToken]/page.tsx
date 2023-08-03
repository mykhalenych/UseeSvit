'use client';

import {Grid, Typography} from '@mui/material';
import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTranslation} from 'react-i18next';
import {useParams, useRouter} from 'next/navigation';

import {useAppDispatch} from '@/app/redux/store';
import {PasswordProps} from './types';
import {defaultValues, validation} from './form';
import {newPassword} from '@/app/redux/auth/thunks';
import InputControl from '@/app/components/common/form/InputControl';
import Button from '@/app/components/common/Button';
import {LOGIN_PATH} from '@/Routes/constants';
import WithPrivateRoute from '@/app/components/common/Routes/WithAuthRoute';

const RecoveryPassword = () => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    const {resetToken} = useParams();
    const {t} = useTranslation();

    const methods = useForm<PasswordProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    const handleRedirect = (path: string) => {
        route.push(path);
    };

    const onSubmit = (data: PasswordProps) => {
        if (resetToken) {
            const dataWithToken = {...data, resetToken};

            dispatch(newPassword(dataWithToken)).then(
                (res) => res.meta.requestStatus === 'fulfilled' && route.push(LOGIN_PATH),
            );
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container px={2} spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">{t('recoveryPassword.title')}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl
                            control={control}
                            label={t('recoveryPassword.newPassword')}
                            type="password"
                            name="newPassword"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl
                            control={control}
                            label={t('recoveryPassword.confirmPassword')}
                            type="password"
                            name="passwordConfirmation"
                            fullWidth
                        />
                    </Grid>
                    <Grid container item xs={12} justifyContent="space-between">
                        <Button type="submit" variant="contained" color="primary" minWidth={100}>
                            {t('recoveryPassword.btnSave')}
                        </Button>
                        <Button onClick={() => handleRedirect('/')} color="primary" minWidth={100}>
                            {t('recoveryPassword.btnCancel')}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default WithPrivateRoute(RecoveryPassword);
