import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {Grid, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';

import {useAppDispatch} from '../../../redux/store';
import {activateUser} from '../../../redux/auth/thunks';
import {authThunkNames} from '../../../redux/auth/constants';
import {selectLoading} from '../../../redux/selectors';
import {Progress} from '../../../components/common/Progress';
import {ISlicesNames} from '../../../redux/types';

const Activation = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {activationToken} = useParams();
    const {t} = useTranslation();
    const isLoading = useSelector(selectLoading(ISlicesNames.auth, authThunkNames.activateUser));

    useEffect(() => {
        if (activationToken) {
            dispatch(activateUser(activationToken)).then(
                (res) => res.meta.requestStatus === 'fulfilled' && navigate('/'),
            );
        }
    }, [activationToken, dispatch, navigate]);

    return (
        <Grid container spacing={2} px={2} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
                <Typography variant="h3">{t('welcomeToUseeSvit')}</Typography>
                {isLoading && <Progress />}
            </Grid>
        </Grid>
    );
};

export default Activation;
