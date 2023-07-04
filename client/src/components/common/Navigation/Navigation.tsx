/* eslint-disable max-len */
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
import {IThemeNames} from '../../../redux/common/types';
import ProfileMenu from './ProfileMenu';
import {selectUser} from '../../../redux/auth/selectors';

import {BackgroundDiv} from './Styles';
import Select from '../inputs/Select';
import {useForm} from 'react-hook-form';
import {ILoginProps} from '../../../pages/Auth/Login/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {validation} from '../../../pages/Plan/form';
import {activateLanguageUser, themeUser} from '../../../redux/auth/thunks';

const Navigation = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useSelector(selectUser);
    const handleRedirect = (path: string) => {
        navigate(path);
    };

    const handleThemeChange = (user: any) => {
        dispatch(themeUser(user.theme === IThemeNames.light ? IThemeNames.dark : IThemeNames.light));
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const methods = useForm<ILoginProps>({
        resolver: yupResolver(validation),
    });

    const {control} = methods;

    const handleLanguage = (language: any) => {
        dispatch(activateLanguageUser(language));
    };

    return (
        <BackgroundDiv>
            <Grid container justifyContent="space-between" px={2}>
                <Grid item display="flex" alignItems="center">
                    <IconButton color="primary" onClick={handleThemeChange}>
                        {user.theme === IThemeNames.light ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                    <IconButton color="primary" onClick={() => setIsEditing(true)}>
                        <PlanetIcon />
                    </IconButton>
                    {isEditing && (
                        <Select
                            defaultValue={user.language}
                            onChange={handleLanguage}
                            name="language"
                            options={[
                                {id: 'en', displayName: 'English'},
                                {id: 'ua', displayName: 'Ukrainian'},
                            ]}
                            label=""
                        />
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
