import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {SIGN_IN_PATH, LOGIN_PATH} from '../../Routes/constants';

const AuthLayout = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to={LOGIN_PATH}>Login Page</Link>
                </li>
                <li>
                    <Link to={SIGN_IN_PATH}>Sign in Page</Link>
                </li>
            </ul>

            <Outlet />
        </>
    );
};

export default AuthLayout;
