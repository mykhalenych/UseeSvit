import {IRootState} from '../store';

export const selectUserCoords = (state: IRootState) => state.common.data.userCoords;
