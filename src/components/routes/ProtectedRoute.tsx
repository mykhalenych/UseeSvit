import React from 'react';
import {Navigate} from 'react-router-dom';

import {LOGIN_PATH} from '../../Routes/constants';
import {getAuthTokens} from '../../common/utils';

const ProtectedRoute = ({children}: {children: JSX.Element}) => {
    return getAuthTokens() ? children : <Navigate to={LOGIN_PATH} />;
};

export default ProtectedRoute;
