import {styled} from '@mui/material/styles';

export const BoxLoader = styled('div')(() => ({
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: '500',
    backgroundColor: '#0000004D',
    backdropFilter: 'blur(10px)',
}));
