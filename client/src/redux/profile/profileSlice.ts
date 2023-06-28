import {ISlicesNames} from '../types';
import createGenericSlice from '../createGenericSlice';
import {IProfileState} from './types';
import {changeUserName, changeUserPassword} from './thunks';

const reducers = {};

const initialData = {
    profile: {
        newName: '',
        newPassword: '',
    },
};

export const profileData = createGenericSlice<IProfileState, typeof reducers>({
    name: ISlicesNames.profile,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: (builder) => {
        builder.addCase(changeUserName.fulfilled, (state, action) => {
            state.data.profile.newName = action.payload;
        });
        builder.addCase(changeUserPassword.fulfilled, (state, action) => {
            state.data.profile.newPassword = action.payload;
        });
    },
});

export default profileData.reducer;
