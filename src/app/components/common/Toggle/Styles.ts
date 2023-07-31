import {styled} from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';

export const StyledToggleButton = styled(ToggleButton)(({theme}) => ({
    borderRadius: '35%',
    borderColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
    width: '35px',
    height: '25px',
}));
