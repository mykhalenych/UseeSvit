'use client';

import {useForm, FormProvider} from 'react-hook-form';
import {Grid, Typography} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/navigation';

import {validation} from './form';
import {CHECK_EMAIL_PATH, LOGIN_PATH} from '../../../Routes/constants';
import {IForgotPassProps} from './types';
import {useAppDispatch} from '@/app/redux/store';
import {forgotPassword} from '@/app/redux/auth/thunks';
import InputControl from '@/app/components/common/form/InputControl';
import Button from '@/app/components/common/Button';

const ForgotPassword = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {t} = useTranslation();

    const methods = useForm<IForgotPassProps>({
        resolver: yupResolver(validation),
    });

    const {handleSubmit, control} = methods;

    const onSubmit = (data: IForgotPassProps) => {
        dispatch(forgotPassword(data)).then(
            (res) => res.meta.requestStatus === 'fulfilled' && router.push(CHECK_EMAIL_PATH),
        );
    };

    const handleRedirect = () => {
        router.push(LOGIN_PATH);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2} px={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">{t('forgotPassword.title')}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl control={control} label={t('emailAddress')} name="email" fullWidth />
                    </Grid>
                    <Grid container item xs={12} justifyContent="space-between">
                        <Button onClick={handleRedirect} color="primary" minWidth={100}>
                            {t('logIn.btn')}
                        </Button>
                        <Button type="submit" variant="contained" color="primary" minWidth={180}>
                            {t('sendInstructions')}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default ForgotPassword;
