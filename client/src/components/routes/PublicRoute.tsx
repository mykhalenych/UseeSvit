import React from 'react';
import {Navigate} from 'react-router-dom';

import {getAuthTokens} from '../../common/utils';

const PublicRoute = ({children}: {children: JSX.Element}) => {
    return !getAuthTokens() ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
