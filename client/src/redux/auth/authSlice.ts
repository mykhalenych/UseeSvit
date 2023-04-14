import {ISlicesNames} from '../types';
import {fetchLogin} from './thunks';
import createGenericSlice from '../createGenericSlice';
import {IAuthState} from './types';

const reducers = {};

const initialData = {
    jwtToken: '',
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
        builder.addCase(fetchLogin.fulfilled, (state) => {
            state.data = initialData;
        });
    },
});

export const {resetSlice} = authData.actions;
export default authData.reducer;
