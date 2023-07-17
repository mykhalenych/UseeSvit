'use client';

import {styled} from '@mui/material/styles';

export const Main = styled('main')(() => ({
    background: `url(./assets/img/mainBg.png)`,
    height: 'calc(100vh - 160px)',
    overflow: 'hidden',
    backgroundSize: 'cover',
}));
