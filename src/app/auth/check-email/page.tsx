'use client';

import {Grid, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/navigation';
import {useSelector} from 'react-redux';

import {selectLoading} from '@/app/redux/selectors';
import {ISlicesNames} from '@/app/redux/types';
import {authThunkNames} from '@/app/redux/auth/constants';
import Button from '@/app/components/common/Button';
import {LOGIN_PATH} from '@/Routes/constants';

const CheckEmail = () => {
    const router = useRouter();
    const {t} = useTranslation();

    const handleRedirect = () => {
        router.push(LOGIN_PATH);
    };

    const isLoading = useSelector(selectLoading(ISlicesNames.auth, authThunkNames.fetchUser));

    return (
        <Grid container spacing={2} px={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h3">{t('checkEmail')}</Typography>
            </Grid>
            <Grid item container justifyContent="center" xs={12}>
                <Button isLoading={isLoading} onClick={handleRedirect} color="primary" minWidth={180}>
                    {t('goToLogin')}
                </Button>
            </Grid>
        </Grid>
    );
};

export default CheckEmail;
