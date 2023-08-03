'use client';

import {Grid, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/navigation';

import Button from '@/app/components/common/Button';
import {LOGIN_PATH} from '@/Routes/constants';
import WithPrivateRoute from '@/app/components/common/Routes/WithAuthRoute';

const CheckEmail = () => {
    const router = useRouter();
    const {t} = useTranslation();

    const handleRedirect = () => {
        router.push(LOGIN_PATH);
    };

    return (
        <Grid container spacing={2} px={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h3">{t('checkEmail')}</Typography>
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
                <Button onClick={handleRedirect} color="primary" minWidth={180}>
                    {t('goToLogin')}
                </Button>
            </Grid>
        </Grid>
    );
};

export default WithPrivateRoute(CheckEmail);
