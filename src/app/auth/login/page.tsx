'use client';

import {useForm, FormProvider} from 'react-hook-form';
import {Grid, Typography} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/navigation';

import {FORGOT_PATH, SIGN_UP_PATH} from '@/Routes/constants';
import {validation, defaultValues} from './form';
import {ILoginProps} from './types';
import {useAppDispatch} from '@/app/redux/store';
import {logInUser} from '@/app/redux/auth/thunks';
import InputControl from '@/app/components/common/form/InputControl';
import Button from '@/app/components/common/Button';
import {selectLoading} from '@/app/redux/selectors';
import {useSelector} from 'react-redux';
import {ISlicesNames} from '@/app/redux/types';
import {authThunkNames} from '@/app/redux/auth/constants';

const Login = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const methods = useForm<ILoginProps>({
        resolver: yupResolver(validation),
        defaultValues,
    });
    const {handleSubmit, control} = methods;

    const onSubmit = (data: ILoginProps) => {
        dispatch(logInUser(data)).then((res: any) => res.meta.requestStatus === 'fulfilled' && router.push('/'));
    };

    const handleRedirect = (path: string) => {
        router.push(path);
    };

    const isLoading = useSelector(selectLoading(ISlicesNames.auth, authThunkNames.logInUser));

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container px={2} spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h2">{t('logIn.title')}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl control={control} label={t('emailAddress')} name="email" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <InputControl
                            control={control}
                            label={t('password')}
                            type="password"
                            name="password"
                            fullWidth
                        />
                    </Grid>
                    <Grid container item xs={12} justifyContent="space-between">
                        <Button onClick={() => handleRedirect(SIGN_UP_PATH)} color="primary" minWidth={100}>
                            {t('signUp.btn')}
                        </Button>
                        <Button
                            onClick={() => handleRedirect(FORGOT_PATH)}
                            variant="text"
                            color="primary"
                            minWidth={180}>
                            {t('forgotPassword.btn')}
                        </Button>
                        <Button isLoading={isLoading} type="submit" variant="contained" color="primary" minWidth={100}>
                            {t('logIn.btn')}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormProvider>
    );
};

export default Login;
