/* eslint-disable import/named */
import {IRootState} from './store';
import {IGenericState} from './createGenericSlice';
import {showSuccess} from './snackbar/slice';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import {ISlicesNames, StatusesTypes} from './types';

export interface ICommonThunkParams {
    force?: boolean;
}

export const thunkCondition =
    (sliceName: keyof IRootState, thunkName: string) => (arg: ICommonThunkParams | any, helpers: any) => {
        if (arg?.force) {
            return true;
        }

        const state = helpers.getState() as IRootState;

        const slice = state[sliceName] as unknown as IGenericState<any>;

        const fetchStatus = slice?.statuses[thunkName];

        return !(fetchStatus === StatusesTypes.finished || fetchStatus === StatusesTypes.loading);
    };

export function handleResponse(
    dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
    message: string,
    id: number,
    from: {
        slice: ISlicesNames;
        thunk: string;
        requestId: any;
    },
) {
    dispatch(
        showSuccess({
            message,
            id,
            from,
        }),
    );
}
