import {createAsyncThunk} from '@reduxjs/toolkit';
import {authThunkNames} from './constants';
import {ISlicesNames} from '../types';

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
