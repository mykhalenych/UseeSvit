import {styled} from '@mui/material/styles';
import type {TextFieldProps} from '@mui/material';
import {IThemeNames} from '../../../redux/common/types';
import {TextField} from '@mui/material';
import {IInputProps} from './types';

const StyledInput = styled(TextField)<IInputProps & TextFieldProps>(({theme}) => ({
    width: 240,
    marginBottom: 30,

    '& .MuiInputBase-root': {
        minHeight: 56,
    },
    ' & .MuiInputBase-input': {
        borderRadius: 4,
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.primary.light,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.dark,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.dark,
        },
    },
}));

export default StyledInput;
