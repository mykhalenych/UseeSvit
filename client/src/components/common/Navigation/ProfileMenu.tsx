import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {resetAuthToken} from '../../../common/utils';
import {logoutUser} from '../../../redux/auth/thunks';
import {useAppDispatch} from '../../../redux/store';

interface IProps {
    anchorEl: HTMLElement | null;
    handleClose: () => void;
}

const ProfileMenu: React.FC<IProps> = ({handleClose, anchorEl}) => {
    const dispatch = useAppDispatch();

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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );
};

export default ProfileMenu;
