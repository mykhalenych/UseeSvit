import React from 'react';
import {BrowserRouter as Router, Route, Routes as RootRoutes} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import {
    ACTIVATION_PATH,
    AUTH_PATH,
    LOGIN_PATH,
    SIGN_IN_PATH,
    FORGOT_PATH,
    CHECK_EMAIL_PATH,
    PLAN_PATH,
    PROFILE_PATH,
} from './constants';
import PublicRoute from '../components/routes/PublicRoute';
import SignIn from '../pages/Auth/SignIn/SignIn';
import Login from '../pages/Auth/Login/Login';
import AuthLayout from '../layouts/AuthLayout';
import Activation from '../pages/Auth/Activation';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Plan from '../pages/Plan';
import CheckEmail from '../pages/Auth/CheckEmail';
import Main from '../pages/Main';
import PlanLayout from '../layouts/PlanLayout';
import Profile from '../pages/Profile/Profile';
import ProtectedRoute from '../components/routes/ProtectedRoute';

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
                        path={CHECK_EMAIL_PATH}
                        element={
                            <PublicRoute>
                                <CheckEmail />
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
                <Route path={PROFILE_PATH} element={<AuthLayout />}>
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                </Route>
                <Route path="/" element={<MainLayout />}>
                    <Route path={'/'} element={<Main />} />
                    <Route path={PLAN_PATH} element={<PlanLayout />}>
                        <Route path={PLAN_PATH} element={<Plan />} />
                    </Route>
                </Route>
            </RootRoutes>
        </Router>
    );
};

export default Routes;
