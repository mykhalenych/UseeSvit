export interface ICommonState {
    theme: string;
    userCoords: {lat: number; lng: number};
    language: {id: string; displayName: string};
}

export enum IThemeNames {
    light = 'light',
    dark = 'dark',
}
