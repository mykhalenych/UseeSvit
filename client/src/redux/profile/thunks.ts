import {createAsyncThunk} from '@reduxjs/toolkit';
import {changeName, changePassword} from '../../services/profile';
import {profileThunkNames} from './constants';
import {handleResponse} from '../utils';
import {ISlicesNames} from '../types';
import {NewNameRequest, NewPasswordRequest} from '../../services/profile/types';

export const changeUserName = createAsyncThunk(
    `${ISlicesNames.profile}/${profileThunkNames.changeName}`,
    async (data: NewNameRequest, {rejectWithValue, dispatch}) => {
        try {
            const result = await changeName(data);

            handleResponse(dispatch, 'Name changed successfully!', 123, {
                slice: ISlicesNames.profile,
                thunk: profileThunkNames.changeName,
                requestId: result.requestId,
            });

            return result;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);

export const changeUserPassword = createAsyncThunk(
    `${ISlicesNames.profile}/${profileThunkNames.changePassword}`,
    async (data: NewPasswordRequest, {rejectWithValue, dispatch}) => {
        try {
            const result = await changePassword(data);

            handleResponse(dispatch, 'Password changed successfully!', 456, {
                slice: ISlicesNames.profile,
                thunk: profileThunkNames.changePassword,
                requestId: result.requestId,
            });

            return result;
        } catch (err) {
            return rejectWithValue({message: err});
        }
    },
);
