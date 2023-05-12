import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Grid, IconButton} from '@mui/material';
import {useSelector} from 'react-redux';

import {LOGIN_PATH} from '../../../Routes/constants';
import {ReactComponent as ProfileIcon} from '../../../assets/icons/profile.svg';
import {ReactComponent as LogoIcon} from '../../../assets/icons/logo.svg';
import {ReactComponent as PlanetIcon} from '../../../assets/icons/planet.svg';
import {ReactComponent as DarkModeIcon} from '../../../assets/icons/darkMode.svg';
import {ReactComponent as LightModeIcon} from '../../../assets/icons/lightMode.svg';
import {useAppDispatch} from '../../../redux/store';
import {selectTheme} from '../../../redux/common/selectors';
import {IThemeNames} from '../../../redux/common/types';
import {setUserTheme} from '../../../redux/common/commonSlice';
import ProfileMenu from './ProfileMenu';
import {selectUser} from '../../../redux/auth/selectors';

import {BackgroundDiv} from './styles';

const Navigation = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const theme = useSelector(selectTheme);
    const user = useSelector(selectUser);

    const handleRedirect = (path: string) => {
        navigate(path);
    };

    const handleThemeChange = () => {
        dispatch(setUserTheme(theme === IThemeNames.light ? IThemeNames.dark : IThemeNames.light));
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <BackgroundDiv>
            <Grid container justifyContent="space-between" px={2}>
                <Grid item display="flex" alignItems="center">
                    <IconButton color="primary">
                        <PlanetIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={handleThemeChange}>
                        {theme === IThemeNames.light ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
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
