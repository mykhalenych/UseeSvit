import type {Middleware} from 'redux';

import {IActionWithError, showError, showSuccess} from './slice';
import {isRejectedAction} from '../createGenericSlice';

export const snackbarMiddleware: Middleware<string> =
    ({dispatch}) =>
    (next) =>
    (action) => {
        const id = Date.now();

        if (action?.successNotification) {
            dispatch(showSuccess({id, message: action?.successNotification}));
            return next(action);
        }

        if (action?.failNotification) {
            dispatch(showError({id, message: action?.message}));
            return next(action);
        }

        if (action?.type && isRejectedAction(action)) {
            const {payload} = action as IActionWithError;
            dispatch(showError({id, message: payload?.message}));
            return next(action);
        }

        return next(action);
    };
