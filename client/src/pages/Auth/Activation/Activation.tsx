import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {activateUser} from '../../../redux/auth/thunks';
import {useAppDispatch} from '../../../redux/store';
import {LOGIN_PATH, SIGN_IN_PATH} from '../../../Routes/constants';

const Activation = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigate();

    const {activationToken} = useParams();

    useEffect(() => {
        if (activationToken) {
            dispatch(activateUser(activationToken)).then((res) => {
                if (res.type.endsWith('/rejected')) {
                    navigation(SIGN_IN_PATH);
                }
                navigation(LOGIN_PATH);
            });
        }
    }, [activationToken, dispatch, navigation]);

    return <div>Activation</div>;
};

export default Activation;
