import React from 'react';
import {BrowserRouter as Router, Route, Routes as RootRoutes} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import {LOGIN_PATH, SIGN_IN_PATH} from './constants';
import PublicRoute from '../components/routes/PublickRoute';
import SignIn from '../pages/Auth/SignIn/SignIn';
import Login from '../pages/Auth/Login/Login';
import AuthLayout from '../layouts/AuthLayout';

const Routes: React.FC = () => {
    return (
        <Router>
            <RootRoutes>
                <Route element={<AuthLayout />}>
                    <Route
                        path={LOGIN_PATH}
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path={SIGN_IN_PATH}
                        element={
                            <PublicRoute>
                                <SignIn />
                            </PublicRoute>
                        }
                    />
                </Route>
                <Route element={<MainLayout />} />
            </RootRoutes>
        </Router>
    );
};

export default Routes;
