import {styled} from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

export const Button = styled('button')(() => ({
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
}));

export const Icon = styled(CloseIcon)(() => ({
    color: 'white',
    fontSize: 16,
}));
