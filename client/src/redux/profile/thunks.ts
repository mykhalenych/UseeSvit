import {createAsyncThunk} from '@reduxjs/toolkit';
import {ISlicesNames} from '../types';
import {changeName, changePassword} from '../../services/profile';
import {NewNameRequest, NewPasswordRequest} from '../../services/profile/types';
import {profileThunkNames} from './constants';
import {showSuccess} from '../snackbar/slice';

export const changeUserName = createAsyncThunk(
    `${ISlicesNames.profile}/${profileThunkNames.changeName}`,
    async (data: NewNameRequest, {rejectWithValue, dispatch}) => {
        try {
            const result = await changeName(data);

            dispatch(
                showSuccess({
                    message: 'Name changed successfully!',
                    id: 123,
                    from: {
                        slice: ISlicesNames.profile,
                        thunk: profileThunkNames.changeName,
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

export const changeUserPassword = createAsyncThunk(
    `${ISlicesNames.profile}/${profileThunkNames.changePassword}`,
    async (data: NewPasswordRequest, {rejectWithValue, dispatch}) => {
        try {
            const result = await changePassword(data);

            dispatch(
                showSuccess({
                    message: 'Password changed successfully!',
                    id: 456,
                    from: {
                        slice: ISlicesNames.profile,
                        thunk: profileThunkNames.changePassword,
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
