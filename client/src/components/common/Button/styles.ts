import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import type {ButtonProps} from '@mui/material';
import {CustomButtonProps} from './types';

const StyledButton = styled(Button)<CustomButtonProps & ButtonProps>(({theme}) => ({
    borderColor: theme.palette.primary.light,
    borderRadius: 20,
    minHeight: 40,
}));

export default StyledButton;
