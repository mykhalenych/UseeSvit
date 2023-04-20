import {createTheme} from '@mui/material/styles';

const lightPalette = createTheme({
    palette: {
        primary: {
            light: '#58A9A5',
            main: '#39817E',
            dark: '#30716F',
        },
        secondary: {
            main: '#4CAF50',
            light: '#6BBD6E',
            dark: '#358438',
        },
        error: {
            main: '#B54151',
            light: '#D1626C',
            dark: '#9D3344',
        },
        background: {
            default: '#F3FAF8',
            paper: '#F6F6FA',
        },
        text: {
            primary: '#9F9EAA',
            secondary: '#C5C4CB',
            disabled: '#7D7A87',
        },
    },
});

export default lightPalette;
