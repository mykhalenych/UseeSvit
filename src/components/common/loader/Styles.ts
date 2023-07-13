import {styled} from '@mui/material/styles';

export const BoxLoader = styled('div')(({theme}) => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    zIndex: '500',
}));
