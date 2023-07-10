'use client';

import React, {FC, useMemo, ReactNode} from 'react';
import {ThemeProvider, createTheme} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import {SnackbarProvider} from 'notistack';
import {useSelector} from 'react-redux';

import {lightTheme, darkTheme} from './common/themes/themes';
import Snackbar from './layouts/Snackbar';
import {IThemeNames} from './redux/common/types';
import {selectUser} from './redux/auth/selectors';

const Theme: FC = ({children}: {children: ReactNode}) => {
    const user = useSelector(selectUser);
    const theme = useMemo(() => {
        switch (user.theme) {
            case IThemeNames.light:
                return lightTheme;
            case IThemeNames.dark:
                return darkTheme;
            default:
                return createTheme();
        }
    }, [user.theme]);

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
                {children}
            </SnackbarProvider>
        </ThemeProvider>
    );
};

export default Theme;
