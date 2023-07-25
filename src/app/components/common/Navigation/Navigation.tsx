'use client';

import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Box, Grid, IconButton} from '@mui/material';
import {changeLanguage} from 'i18next';
import {useRouter} from 'next/navigation';

import {useAppDispatch} from '../../../redux/store';
import {selectUser} from '../../../redux/auth/selectors';
import {changeUserLanguage, changeUserTheme} from '../../../redux/auth/thunks';
import ProfileMenu from './ProfileMenu';
import {LOGIN_PATH} from '@/Routes/constants';
import {ProfileIcon} from '@/icons/profile-icon';
import {LogoIcon} from '@/icons/logo-icon';
import {DarkModeIcon} from '@/icons/dark-mode-icon';
import {LightModeIcon} from '@/icons/light-mode-icon';
import ColorToggleButton from '../Toggle';
import {IThemeNames} from '../../../redux/common/types';

import {BackgroundDiv} from './Styles';

const Navigation = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const router = useRouter();

    const dispatch = useAppDispatch();
    const user = useSelector(selectUser);

    const handleRedirect = (path: string) => {
        router.push(path);
    };

    const handleThemeChange = () => {
        dispatch(changeUserTheme(user.theme === IThemeNames.light ? IThemeNames.dark : IThemeNames.light));
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (value: string) => {
        dispatch(changeUserLanguage(value)).then((res) => {
            res.meta.requestStatus === 'fulfilled' && changeLanguage(res.payload as string);
        });
    };

    return (
        <BackgroundDiv>
            <Grid container justifyContent="space-between" px={2}>
                <Grid item display="flex" alignItems="center">
                    {user.id && (
                        <>
                            <IconButton color="primary" onClick={handleThemeChange}>
                                {user.theme === IThemeNames.light ? <DarkModeIcon /> : <LightModeIcon />}
                            </IconButton>
                            <ColorToggleButton language={user.language} onLanguageChange={handleLanguageChange} />
                        </>
                    )}
                </Grid>
                <IconButton color="primary" onClick={() => handleRedirect('/')}>
                    <LogoIcon />
                </IconButton>
                <Grid item display="flex" alignItems="center">
                    {!user.id ? (
                        <IconButton color="primary" onClick={() => handleRedirect(LOGIN_PATH)}>
                            <ProfileIcon />
                        </IconButton>
                    ) : (
                        <IconButton color="primary" onClick={handleMenuOpen}>
                            <ProfileIcon />
                        </IconButton>
                    )}
                    {anchorEl && <ProfileMenu handleClose={handleClose} anchorEl={anchorEl} />}
                </Grid>
            </Grid>
        </BackgroundDiv>
    );
};

export default Navigation;
