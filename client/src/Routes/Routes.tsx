import React from 'react';
import {BrowserRouter as Router, Route, Routes as RootRoutes} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import {ACTIVATION_PATH, AUTH_PATH, LOGIN_PATH, SIGN_IN_PATH, FORGOT_PATH} from './constants';
import PublicRoute from '../components/routes/PublicRoute';
import SignIn from '../pages/Auth/SignIn/SignIn';
import Login from '../pages/Auth/Login/Login';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';
import AuthLayout from '../layouts/AuthLayout';
import Activation from '../pages/Auth/Activation';
import Map from '../pages/Map';

const Routes: React.FC = () => {
    return (
        <Router>
            <RootRoutes>
                <Route path={AUTH_PATH} element={<AuthLayout />}>
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
                    <Route
                        path={FORGOT_PATH}
                        element={
                            <PublicRoute>
                                <ForgotPassword />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path={ACTIVATION_PATH}
                        element={
                            <PublicRoute>
                                <Activation />
                            </PublicRoute>
                        }
                    />
                </Route>
                <Route path={'/'} element={<MainLayout />}>
                    <Route path={'/'} element={<Map />} />
                </Route>
            </RootRoutes>
        </Router>
    );
};

export default Routes;
