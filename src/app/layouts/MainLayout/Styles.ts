'use client';

import {styled} from '@mui/material/styles';

export const Main = styled('main')(() => ({
    background: `url(./assets/img/mainBg.png)`,
    height: 'calc(100vh - 160px)',
    overflow: 'hidden',
    backgroundSize: 'cover',
}));

export const Footer = styled('footer')(({theme}) => ({
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 80,
    backgroundColor: theme.palette.primary.main,
}));
