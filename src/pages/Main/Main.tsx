import React from 'react';
import {Grid, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import Button from '../../components/common/Button';
import {PLAN_PATH} from '../../Routes/constants';
import {Progress} from '../../components/common/Progress';
// import { useSelector } from 'react-redux';
// import { selectLoading } from '../../redux/selectors';

const Main = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleRedirect = () => {
        navigate(PLAN_PATH);
    };

    //const isLoading = useSelector(selectLoading(smlicesName, thunksNae || thunksNames[]));
    //const isLoading = true;

    return (
        <Grid container alignItems="center" height="100%" flexDirection="column" py={2}>
            <Grid item xs={6}>
                <Typography variant="h2">{t('planYourTrip')}</Typography>
            </Grid>
            <Grid item xs={6}>
                {/* {isLoading && <Progress />} */}
                <Button onClick={handleRedirect} color="primary">
                    {t('planYourTrip')}
                </Button>
            </Grid>
        </Grid>
    );
};

export default Main;
