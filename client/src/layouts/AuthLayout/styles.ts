import {styled} from '@mui/material/styles';

export const ContainerDiv = styled('div')(({theme}) => ({
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
}));
