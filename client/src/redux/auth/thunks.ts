import {createAsyncThunk} from '@reduxjs/toolkit';

import {authThunkNames} from './constants';
import {ISlicesNames} from '../types';
import {SignInRequest, LogInRequest, ForgotPasswordRequest} from '../../services/auth/types';
import {activate, getUser, login, logout, register, resetPassword} from '../../services/auth';

export const fetchUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.fetchUser}`,
    async (data: void, {rejectWithValue}) => {
        try {
            return await getUser();
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const signInUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.signInUser}`,
    async (data: SignInRequest, {rejectWithValue}) => {
        try {
            return await register(data);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const logInUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.logInUser}`,
    async (data: LogInRequest, {rejectWithValue}) => {
        try {
            return await login(data);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const forgotPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.forgotPassword}`,
    async (data: ForgotPasswordRequest, {rejectWithValue}) => {
        try {
            return await resetPassword(data);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const activateUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.activateUser}`,
    async (activationToken: string, {rejectWithValue}) => {
        try {
            return await activate(activationToken);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const logoutUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.logoutUser}`,
    async (data: void, {rejectWithValue}) => {
        try {
            return await logout();
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);
