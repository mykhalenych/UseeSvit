import {Link} from 'react-router-dom';
import {styled} from '@mui/material/styles';

export const ForgotPassLink = styled(Link)(({theme}) => ({
    color: theme.palette.primary.contrastText,
    fontSize: 12,
    height: '16px',
    width: '100%',
    textDecoration: 'none',
}));

export const SignLink = styled(Link)(({theme}) => ({
    color: theme.palette.text.secondary,
    fontSize: 16,
    width: 240,
    textDecoration: 'none',
}));
