import {createAsyncThunk} from '@reduxjs/toolkit';
import {changeLanguage} from 'i18next';
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
} from '../../services/auth';
import {showSuccess} from '../snackbar/slice';

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

export const newPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.newPassword}`,
    async (data: RecoveryPasswordRequest, {rejectWithValue, dispatch}) => {
        try {
            const result = await recoveryPassword(data);

            dispatch(
                showSuccess({
                    message: 'Password changed successfully!',
                    id: 333,
                    from: {
                        slice: ISlicesNames.auth,
                        thunk: authThunkNames.newPassword,
                        requestId: result.requestId,
                    },
                }),
            );

            return result;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const languageUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.languageUser}`,
    async (language: string, {rejectWithValue}) => {
        try {
            return await changeLanguage(language);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const themeUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.themeUser}`,
    async (theme: string, {rejectWithValue}) => {
        try {
            return await changeTheme(theme);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);
