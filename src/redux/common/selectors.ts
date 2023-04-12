import {IRootState} from '../store';

export const selectTheme = (state: IRootState) => state.common.data.theme;
