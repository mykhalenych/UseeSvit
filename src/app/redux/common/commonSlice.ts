import {ISlicesNames} from '../types';
import createGenericSlice, {IGenericState} from '../createGenericSlice';
import {ICommonState} from './types';

const reducers = {
    setUserCoords: (state: IGenericState<ICommonState>, action: {payload: {lat: number; lng: number}}) => {
        state.data.userCoords = action.payload;
    },
};

const initialData = {
    userCoords: {lat: 49.82, lng: 24.03},
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
    // ts-ignore
    extraReducers: () => {},
});

export const {resetSlice, setUserCoords} = commonData.actions;
export default commonData.reducer;
