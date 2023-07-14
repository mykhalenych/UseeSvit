import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import {authData} from './auth/authSlice';
import {snackbarData} from './snackbar/slice';
import {snackbarMiddleware} from './snackbar/middleware';
import {commonData} from './common/commonSlice';

const combinedReducer = combineReducers({
    auth: authData.reducer,
    snackbar: snackbarData.reducer,
    common: commonData.reducer,
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(snackbarMiddleware),
    devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
