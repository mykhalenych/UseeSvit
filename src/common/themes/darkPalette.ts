import {createTheme} from '@mui/material/styles';

const darkPalette = createTheme({
    palette: {
        mode: 'dark',
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
            light: '#F6F6FA',
        },
        background: {
            default: '#1E222C',
            paper: '#2A303E',
        },
        text: {
            secondary: '#92A6C7',
        },
    },
});

export default darkPalette;
