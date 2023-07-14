import {IRootState} from '../types';

export const selectUserCoords = (state: IRootState) => state.common.data.userCoords;
