import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import {CustomButtonProps} from './types';

const StyledButton = styled(Button)<CustomButtonProps>(({theme}) => ({
    borderColor: theme.palette.primary.light,
    borderRadius: 20,
    minHeight: 40,
}));

export default StyledButton;
