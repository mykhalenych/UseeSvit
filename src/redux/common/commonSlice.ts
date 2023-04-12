import {ISlicesNames} from '../types';
import createGenericSlice from '../createGenericSlice';
import {ICommonState, IThemeNames} from './types';

const reducers = {};

const initialData = {
    theme: IThemeNames.light,
};

export const commonData = createGenericSlice<ICommonState, typeof reducers>({
    name: ISlicesNames.auth,
    initialState: {
        data: initialData,
        statuses: {},
        errors: {},
        lastRequestId: {},
    },
    reducers,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    extraReducers: () => {},
});

export const {resetSlice} = commonData.actions;
export default commonData.reducer;
