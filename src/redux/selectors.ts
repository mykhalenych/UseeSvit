import {isArray, compact, isEqual, keys} from 'lodash';
import {createSelectorCreator, defaultMemoize} from 'reselect';

import {IRootState} from './store';
import {SliceNames, StatusesTypes} from './types';
import {IGenericState} from './createGenericSlice';

export const selectLoading = (sliceName: SliceNames, thunkName: string | string[]) => (state: IRootState) => {
    const slice = state[sliceName] as unknown as IGenericState<any>;

    if (!slice) return false;

    if (isArray(thunkName)) {
        return Boolean(compact(thunkName.map((name: string) => slice.statuses[name] === StatusesTypes.loading)).length);
    }
    return slice.statuses[thunkName] === StatusesTypes.loading;
};

const selectSliceErrors = (sliceName: SliceNames) => (state: IRootState) => {
    const slice = state[sliceName] as unknown as IGenericState<any>;

    if (!slice) return {};

    return slice.errors;
};

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const selectErrors = (sliceName: SliceNames) =>
    createDeepEqualSelector(selectSliceErrors(sliceName), (errors) => {
        return keys(errors).map((name: string) => ({...errors[name], thunk: name}));
    });
