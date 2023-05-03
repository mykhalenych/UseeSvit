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
    color: theme.palette.primary.contrastText,
    fontFamily: 'Georgia regular',
    height: 52,
    fontSize: 45,
    fontWeight: 400,
    marginTop: 115,
    marginBottom: 0,
    paddingBottom: 0,
}));

export const ForgotPassLink = styled(Link)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 12,
    height: '16px',
    width: '100%',
    textDecoration: 'none',
    marginLeft: 40,
}));

export const SignLink = styled(Link)(({theme}) => ({
    color: theme.palette.text.primary,
    fontSize: 16,
    width: 240,
    marginTop: 56,
    textDecoration: 'none',
}));
