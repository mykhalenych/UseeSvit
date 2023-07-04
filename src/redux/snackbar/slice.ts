import type {PrepareAction, Action, SliceCaseReducers, PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import {IRootState} from '../store';
import {ISlicesNames, SliceNames} from '../types';

export interface IActionWithError {
    payload: {message?: string};
}

export interface ISnackbarMessage {
    id: number;
    message?: string;
    severity: string;
    dismissed?: boolean;
}

export interface IShowSnackbarPayload {
    message: string;
    id: number;
    from?: {
        slice: SliceNames;
        thunk: string;
        requestId: string;
    };
}

let nextId = 0;

const prepareShow = (payload: PrepareAction<Action>) => {
    nextId += 1;
    return {payload: {...payload, id: nextId}};
};

export const snackbarData = createSlice<
    ISnackbarMessage[],
    SliceCaseReducers<ISnackbarMessage[]>,
    ISlicesNames.snackbar
>({
    name: ISlicesNames.snackbar,
    initialState: [],
    reducers: {
        showError: {
            reducer: (state, action: PayloadAction<IShowSnackbarPayload>) => {
                const {id, message} = action.payload;

                if (!message) {
                    return state;
                }
                return [
                    ...state,
                    {
                        id,
                        message,
                        severity: 'error',
                    },
                ];
            },
            prepare: prepareShow,
        },
        showSuccess: {
            reducer: (state, action: PayloadAction<IShowSnackbarPayload>) => {
                const {id, message} = action.payload;

                return [...state, {id, message, severity: 'success'}];
            },
            prepare: prepareShow,
        },
        hideMessage: {
            reducer: (state, {payload}) => {
                const {dismissAll, id} = payload;
                if (dismissAll) return [];
                return state.filter((item) => item.id !== id);
            },
            prepare: (payload) => ({
                payload: {
                    dismissAll: !payload.id,
                    id: payload.id,
                },
            }),
        },
        removeMessage: (state, {payload}) => {
            return state.filter((message) => message.id !== payload);
        },
    },
});

export const {showError, showSuccess, hideMessage, removeMessage} = snackbarData.actions;

export const selectMessages = (state: IRootState) => state.snackbar;

export default snackbarData.reducer;
