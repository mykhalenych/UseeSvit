import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {authData} from './auth/authSlice';
import {snackbarData} from './snackbar/slice';
import {snackbarMiddleware} from './snackbar/middleware';
import {commonData} from './common/commonSlice';
import {profileData} from './profile/profileSlice';

const combinedReducer = combineReducers({
    auth: authData.reducer,
    snackbar: snackbarData.reducer,
    common: commonData.reducer,
    profile: profileData.reducer,
});

export const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(snackbarMiddleware),
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export type IRootState = ReturnType<typeof store.getState>;

export default store;
