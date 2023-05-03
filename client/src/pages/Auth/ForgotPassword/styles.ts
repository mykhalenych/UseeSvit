import {styled} from '@mui/material/styles';

export const ContainerDiv = styled('div')(({theme}) => ({
    borderRadius: 20,
    backgroundColor: theme.palette.background.paper,
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
    height: 52,
    fontSize: 45,
    fontWeight: 400,
    fontFamily: 'Georgia regular',
    width: 240,
    textAlign: 'center',
    margin: '230px 0 0 0',
}));
