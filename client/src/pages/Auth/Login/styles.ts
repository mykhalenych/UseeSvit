import {Link} from 'react-router-dom';

import {IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

export const ContainerDiv = styled('div')(({theme}) => ({
    borderRadius: 20,
    backgroundColor: '#F6F6F7',
    display: 'flex',
    maxWidth: 540,
    maxHeight: 720,
    left: '30%',
    '& .MuiFormControl-root': {
        margin: 0,
    },
    '& .MuiFormHelperText-root': {
        margin: 0,
    },
}));
export const LoginImg = styled('img')(({theme}) => ({
    borderRadius: '20px 0 0 20px',
    width: 220,
    height: 720,
}));
export const Header = styled('h2')(({theme}) => ({
    color: '#1C1B1F',
    fontFamily: 'Georgia regular',
    fontSize: 45,
    fontWeight: 400,
    height: 52,
    marginTop: 115,
    marginBottom: 0,
    paddingBottom: 0,
}));
export const ForgotPassLink = styled(Link)(({theme}) => ({
    color: '#1C1B1F',
    boxSizing: 'border-box',
    fontFamily: 'Roboto',
    fontSize: 12,
    height: '16px',
    alignItems: 'center',
    width: '100%',
    textDecoration: 'none',
    marginLeft: 40,
}));
export const SignLink = styled(Link)(({theme}) => ({
    color: theme.palette.text.primary,
    fontFamily: 'Roboto',
    fontSize: 16,
    display: 'inline-block',
    width: 240,
    marginTop: 56,
    textDecoration: 'none',
}));
export const CloseButton = styled(IconButton)(({theme}) => ({
    marginLeft: 253,
    marginTop: 45,
}));
