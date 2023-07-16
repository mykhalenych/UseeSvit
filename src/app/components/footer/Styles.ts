'use client';

import {styled} from '@mui/material/styles';

export const Footer = styled('footer')(({theme}) => ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: theme.palette.primary.main,
}));
