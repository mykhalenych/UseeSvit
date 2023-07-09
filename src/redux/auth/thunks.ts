import {createAsyncThunk} from '@reduxjs/toolkit';

import i18n from '../../common/i18n';
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
            dispatch(handleResponse(i18n.t('signedIn', {ns: 'notification'}), `${authThunkNames.signInUser}`));

            return await register(data);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const logInUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.logInUser}`,
    async (data: LogInRequest, {rejectWithValue, dispatch}) => {
        try {
            dispatch(handleResponse(i18n.t('loggedIn', {ns: 'notification'}), `${authThunkNames.logInUser}`));

            return await login(data);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const forgotPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.forgotPassword}`,
    async (data: ForgotPasswordRequest, {rejectWithValue, dispatch}) => {
        try {
            dispatch(
                handleResponse(
                    i18n.t('passwordHasBeenReset', {ns: 'notification'}),
                    `${authThunkNames.forgotPassword}`,
                ),
            );

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
    async (data: void, {rejectWithValue, dispatch}) => {
        try {
            dispatch(handleResponse(i18n.t('loggedOut', {ns: 'notification'}), `${authThunkNames.logoutUser}`));

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
                handleResponse(
                    i18n.t('passwordChangedSuccessfully', {ns: 'notification'}),
                    `${authThunkNames.newPassword}`,
                ),
            );

            return result;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserName = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.changeName}`,
    async (data: string, {rejectWithValue, dispatch}) => {
        try {
            const result = await changeName(data);

            dispatch(
                handleResponse(i18n.t('nameChangedSuccessfully', {ns: 'notification'}), `${authThunkNames.changeName}`),
            );

            return result;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserPassword = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.changePassword}`,
    async (data: NewPasswordRequest, {rejectWithValue, dispatch}) => {
        try {
            const result = await changePassword(data);

            dispatch(
                handleResponse(
                    i18n.t('passwordChangedSuccessfully', {ns: 'notification'}),
                    `${authThunkNames.changePassword}`,
                ),
            );

            return result;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserLanguage = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.changeUserLanguage}`,
    async (language: string, {rejectWithValue, dispatch}) => {
        try {
            dispatch(
                handleResponse(i18n.t('languageChanged', {ns: 'notification'}), `${authThunkNames.changeUserLanguage}`),
            );

            return await changeLanguage(language);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserTheme = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.changeUserTheme}`,
    async (theme: string, {rejectWithValue, dispatch}) => {
        try {
            dispatch(handleResponse(i18n.t('themeChanged', {ns: 'notification'}), `${authThunkNames.changeUserTheme}`));

            return await changeTheme(theme);
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);
