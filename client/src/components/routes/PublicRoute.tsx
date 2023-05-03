import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {selectUser} from '../../redux/auth/selectors';

const PublicRoute = ({children}: {children: JSX.Element}) => {
    const user = useSelector(selectUser);

    return !user.id ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
