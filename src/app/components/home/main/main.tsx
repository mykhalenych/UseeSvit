'use client';

import React from 'react';
import {Grid, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';

import Button from '../../common/Button';
import {PLAN_PATH} from '@/Routes/constants';
import Link from 'next/link';

const Main = () => {
    const {t} = useTranslation();

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
