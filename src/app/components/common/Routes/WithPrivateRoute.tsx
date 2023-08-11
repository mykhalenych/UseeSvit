import React from 'react';

import {useAuthentication} from '@/app/components/common/Routes/hooks';

const WithPrivateRoute = <P extends object>(Component: React.ComponentType<P>) => {
    const PrivateRouteWrapper: React.FC<P> = (props) => {
        useAuthentication(true);

        return <Component {...props} />;
    };

    return PrivateRouteWrapper;
};

export default WithPrivateRoute;
