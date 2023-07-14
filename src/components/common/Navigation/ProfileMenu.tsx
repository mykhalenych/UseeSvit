import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useTranslation} from 'react-i18next';

import {authThunkNames} from '../../../redux/auth/constants';
import {logoutUser} from '../../../redux/auth/thunks';
import {resetAuthToken} from '../../../common/utils';
import {PROFILE_PATH} from '../../../Routes/constants';
import {Progress} from '../loader/Progress';
import {useAppDispatch} from '../../../redux/store';
import {selectLoading} from '../../../redux/selectors';
import {ISlicesNames} from '../../../redux/types';

interface IProps {
    anchorEl: HTMLElement | null;
    handleClose: () => void;
}

const ProfileMenu: React.FC<IProps> = ({handleClose, anchorEl}) => {
    const isLoading = useSelector(selectLoading(ISlicesNames.auth, authThunkNames.logoutUser));

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleLogout = () => {
        dispatch(logoutUser()).then((res) => {
            if (res.meta.requestStatus === 'fulfilled') {
                resetAuthToken();
                handleClose();
            }
        });
    };

    const handleProfile = () => navigate(PROFILE_PATH);

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
            {isLoading && <Progress />}
            <MenuItem onClick={handleProfile}>{t('profileMenu.profile')}</MenuItem>
            <MenuItem onClick={handleClose}>{t('profileMenu.myAccount')}</MenuItem>
            <MenuItem onClick={handleLogout}>{t('profileMenu.logOut')}</MenuItem>
        </Menu>
    );
};

export default ProfileMenu;
