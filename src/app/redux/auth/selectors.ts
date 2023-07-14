import {IRootState} from '../types';

export const selectUser = (state: IRootState) => state.auth.data.user;
