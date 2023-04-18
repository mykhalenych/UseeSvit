import {createAsyncThunk} from '@reduxjs/toolkit';

import {authThunkNames} from './constants';
import {ISlicesNames} from '../types';
import {fetchWrap} from '../../services/common';
import {SignInRequest} from './types';

export const fetchLogin = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.fetchLogin}`,
    async (jwtToken: string, {rejectWithValue}) => {
        try {
            return await [];
        } catch (err) {
            const message = 'Wrong user id!';
            return rejectWithValue({message});
        }
    },
);

export const signInUser = createAsyncThunk(
    `${ISlicesNames.auth}/${authThunkNames.signInUser}`,
    async (data: SignInRequest, {rejectWithValue}) => {
        try {
            const request = {url: '/registration', body: data};
            return await fetchWrap({method: 'POST', request, isAuth: true});
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);
