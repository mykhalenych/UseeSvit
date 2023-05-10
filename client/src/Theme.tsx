import React, {FC, useMemo} from 'react';
import {ThemeProvider, createTheme} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {SnackbarProvider} from 'notistack';
import {useSelector} from 'react-redux';

import {lightTheme, darkTheme} from './common/themes/themes';
import Snackbar from './layouts/Snackbar';
import Routes from './Routes/Routes';
import {selectTheme} from './redux/common/selectors';
import {IThemeNames} from './redux/common/types';

const Theme: FC = () => {
    const userTheme = useSelector(selectTheme);

    const theme = useMemo(() => {
        switch (userTheme) {
            case IThemeNames.light:
                return lightTheme;
            case IThemeNames.dark:
                return darkTheme;
            default:
                return createTheme();
        }
    }, [userTheme]);

    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                <CssBaseline />
                <Snackbar />
                <Routes />
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default Theme;
