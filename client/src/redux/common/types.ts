export interface ICommonState {
    theme: string;
    userCoords: {lat: number; lng: number};
}

export enum IThemeNames {
    light = 'light',
    dark = 'dark',
}
