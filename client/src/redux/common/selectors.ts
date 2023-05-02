import {IRootState} from '../store';

export const selectTheme = (state: IRootState) => state.common.data.theme;
export const selectUserCoords = (state: IRootState) => state.common.data.userCoords;
