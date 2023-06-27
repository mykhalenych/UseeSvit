import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useTranslation} from 'react-i18next';
import {resetAuthToken} from '../../../common/utils';
import {logoutUser} from '../../../redux/auth/thunks';
import {useAppDispatch} from '../../../redux/store';

interface IProps {
    anchorEl: HTMLElement | null;
    handleClose: () => void;
}

const ProfileMenu: React.FC<IProps> = ({handleClose, anchorEl}) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();

    const handleLogout = () => {
        dispatch(logoutUser()).then((res) => {
            if (res.meta.requestStatus === 'fulfilled') {
                resetAuthToken();
                handleClose();
            }
        });
    };

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={handleClose}>{t('profileMenu.profile')}</MenuItem>
            <MenuItem onClick={handleClose}>{t('profileMenu.myAccount')}</MenuItem>
            <MenuItem onClick={handleLogout}>{t('profileMenu.logOut')}</MenuItem>
        </Menu>
    );
};

export default ProfileMenu;
