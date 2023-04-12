import {IRootState} from './store';
import {StatusesTypes} from './types';
import {IGenericState} from './createGenericSlice';

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
