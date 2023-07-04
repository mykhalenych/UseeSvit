export interface ICommonState {
    theme: string;
    userCoords: {lat: number; lng: number};
    language: string;
}

export enum IThemeNames {
    light = 'light',
    dark = 'dark',
}
