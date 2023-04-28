import {ISlicesNames} from '../types';
import {logInUser} from './thunks';
import createGenericSlice from '../createGenericSlice';
import {IAuthState} from './types';
import {saveToken} from '../../services/utils';

const reducers = {};

const initialData = {
    user: {
        name: '',
        email: '',
    },
};

export const authData = createGenericSlice<IAuthState, typeof reducers>({
    name: ISlicesNames.auth,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    extraReducers: (builder) => {
        builder.addCase(logInUser.fulfilled, (state, action) => {
            saveToken(action.payload.accessToken);
            state.data.user = action.payload.user;
        });
    },
});

export const {resetSlice} = authData.actions;
export default authData.reducer;
