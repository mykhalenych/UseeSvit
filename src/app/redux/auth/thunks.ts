import {createAsyncThunk} from '@reduxjs/toolkit';

import {authThunkNames} from './constants';
import {ISlicesNames} from '../types';
import {SignInRequest, LogInRequest, ForgotPasswordRequest, RecoveryPasswordRequest} from '../../services/auth/types';
import {
    activate,
    recoveryPassword,
    getUser,
    login,
    logout,
    register,
    resetPassword,
    changeTheme,
    changeLanguage,
} from '../../services/auth';
import {changeName, changePassword} from '../../services/profile';
import {handleResponse} from '../utils';
import {NewPasswordRequest} from '../../services/profile/types';

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
    async (data: SignInRequest, {rejectWithValue, dispatch}) => {
        try {
            const res = await register(data);

            if (res) {
                dispatch(handleResponse('You are signed in!', `${authThunkNames.signInUser}`));
            }
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const logInUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.logInUser}`,
    async (data: LogInRequest, {rejectWithValue, dispatch}) => {
        try {
            const res = await login(data);

            if (res) {
                dispatch(handleResponse('You are logged in!', `${authThunkNames.logInUser}`));
            }

            return res;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const forgotPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.forgotPassword}`,
    async (data: ForgotPasswordRequest, {rejectWithValue, dispatch}) => {
        try {
            const res = await resetPassword(data);

            if (res) {
                dispatch(handleResponse('Your password has been reset!', `${authThunkNames.forgotPassword}`));
            }

            return res;
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
    async (data: void, {rejectWithValue, dispatch}) => {
        try {
            const res = await logout();

            if (res) {
                dispatch(handleResponse('You are logged out!', `${authThunkNames.logoutUser}`));
            }

            return res;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const newPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.newPassword}`,
    async (data: RecoveryPasswordRequest, {rejectWithValue, dispatch}) => {
        try {
            const res = await recoveryPassword(data);

            if (res) {
                dispatch(handleResponse('Password changed successfully!', `${authThunkNames.newPassword}`));
            }

            return res;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserName = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.changeName}`,
    async (name: string, {rejectWithValue, dispatch}) => {
        try {
            const res = await changeName(name);

            if (res) {
                dispatch(handleResponse('Name changed successfully!', `${authThunkNames.changeName}`));
            }

            return res.user.name;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.changePassword}`,
    async (data: NewPasswordRequest, {rejectWithValue, dispatch}) => {
        try {
            const res = await changePassword(data);

            if (res) {
                dispatch(handleResponse('Password changed successfully!', `${authThunkNames.changePassword}`));
            }

            return res;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserLanguage = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.changeUserLanguage}`,
    async (language: string, {rejectWithValue, dispatch}) => {
        try {
            const res = await changeLanguage(language);

            if (res) {
                dispatch(handleResponse('Language changed!', `${authThunkNames.changeUserLanguage}`));
            }

            return res.user.language;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserTheme = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.changeUserTheme}`,
    async (theme: string, {rejectWithValue, dispatch}) => {
        try {
            const res = await changeTheme(theme);

            if (res) {
                dispatch(handleResponse('Theme changed!', `${authThunkNames.changeUserTheme}`));
            }

            return res.user.theme;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);
