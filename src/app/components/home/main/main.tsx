'use client';

import React, {useEffect} from 'react';
import {Grid, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import Link from 'next/link';

import Button from '../../common/Button';
import {PLAN_PATH} from '@/Routes/constants';
import {useAppDispatch} from '@redux/store';
import {getAuthTokens} from '@/app/common/utils';
import {fetchUser} from '@redux/auth/thunks';

const Main = () => {
    const {t} = useTranslation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = getAuthTokens();

        if (token) {
            dispatch(fetchUser());
        }
    }, [dispatch]);

    return (
        <Grid container alignItems="center" height="100%" flexDirection="column" py={2}>
            <Grid item xs={6}>
                <Typography variant="h2">{t('planYourTrip')}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Link href={PLAN_PATH}>
                    <Button color="primary">{t('planYourTrip')}</Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default Main;
