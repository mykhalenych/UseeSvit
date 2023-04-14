import {createTheme} from '@mui/material/styles';

const lightPalette = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#329DFF',
            main: '#2F80ED',
            dark: '#2E5386',
        },
        secondary: {
            main: '#FD6363',
            light: '#FF9691',
            dark: '#C42E39',
        },
        error: {
            main: '#EC6A4E',
            contrastText: '#FD6363',
            light: '#FFEFEF',
        },
        background: {
            default: '#FFFFFF',
            paper: '#F6F6FA',
        },
        text: {
            primary: '#263238',
            secondary: '#607D8B',
            disabled: '#B3C1D8',
        },
    },
});

export default lightPalette;
