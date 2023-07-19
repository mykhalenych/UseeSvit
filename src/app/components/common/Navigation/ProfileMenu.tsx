'use client';

import React, {useState} from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useTranslation} from 'react-i18next';
import {useRouter} from 'next/navigation';

import {resetAuthToken} from '../../../common/utils';
import {logoutUser} from '../../../redux/auth/thunks';
import {useAppDispatch} from '../../../redux/store';
import {PROFILE_PATH} from '@/Routes/constants';
import Loading from '@/app/loading';

interface IProps {
    anchorEl: HTMLElement | null;
    handleClose: () => void;
}

const ProfileMenu: React.FC<IProps> = ({handleClose, anchorEl}) => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {t} = useTranslation();
    const [loggingOut, setLoggingOut] = useState(false);

    const handleLogout = () => {
        setLoggingOut(true);
        dispatch(logoutUser())
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    resetAuthToken();
                    handleClose();
                }
            })
            .finally(() => {
                setLoggingOut(false);
            });
    };

    const handleProfile = () => router.push(PROFILE_PATH);

    return (
        <>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}>
                <MenuItem onClick={handleProfile}>{t('profileMenu.profile')}</MenuItem>
                <MenuItem onClick={handleClose}>{t('profileMenu.myAccount')}</MenuItem>
                <MenuItem onClick={handleLogout}>{t('profileMenu.logOut')}</MenuItem>
            </Menu>
            {loggingOut && <Loading />}
        </>
    );
};

export default ProfileMenu;
