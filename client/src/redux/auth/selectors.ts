import {IRootState} from '../store';

export const selectUser = (state: IRootState) => state.auth.data.user;
