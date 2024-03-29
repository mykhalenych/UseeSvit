import {ISlicesNames} from '../types';
import {
    activateUser,
    changeUserName,
    fetchUser,
    logInUser,
    logoutUser,
    changeUserTheme,
    changeUserLanguage,
} from './thunks';
import createGenericSlice from '../createGenericSlice';
import {saveToken} from '../../services/utils';
import {IAuthState} from './types';
import {IThemeNames} from '../common/types';

const reducers = {};

const initialData = {
    user: {
        id: '',
        name: '',
        email: '',
        language: 'en',
        theme: IThemeNames.light,
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
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.data.user = action.payload;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.data.user = {
                id: '',
                name: '',
                email: '',
                language: IThemeNames.light,
                theme: 'en',
            };
        });
        builder.addCase(changeUserName.fulfilled, (state, action) => {
            state.data.user = {
                ...state.data.user,
                name: action.payload,
            };
        });
        builder.addCase(changeUserTheme.fulfilled, (state, action) => {
            state.data.user = {
                ...state.data.user,
                theme: action.payload,
            };
        });
        builder.addCase(changeUserLanguage.fulfilled, (state, action) => {
            state.data.user = {
                ...state.data.user,
                language: action.payload,
            };
        });
        builder.addMatcher(
            (action) => action.type === logInUser.fulfilled.type || action.type === activateUser.fulfilled.type,
            (state, action) => {
                saveToken(action.payload.accessToken);
                state.data.user = action.payload.user;
            },
        );
    },
});

export const {resetSlice} = authData.actions;
export default authData.reducer;
