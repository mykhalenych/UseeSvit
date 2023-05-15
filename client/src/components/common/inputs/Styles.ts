import {styled} from '@mui/material/styles';
import type {TextFieldProps} from '@mui/material';
import {TextField} from '@mui/material';

import {IInputProps} from './types';

const StyledInput = styled(TextField)<IInputProps & TextFieldProps>(({theme}) => ({
    borderRadius: 4,
    borderColor: theme.palette.primary.main,

    '& .MuiOutlinedInput-root:hover': {
        borderColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
    },
    '& .MuiFormLabel-root': {
        color: theme.palette.primary.main,
    },
    '& .Mui-error': {
        color: theme.palette.error.main,

        '& .MuiOutlinedInput-root .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main,
        },
    },
    '& .Mui-disabled': {
        background: theme.palette.text.secondary,
        cursor: 'not-allowed',
    },
}));

export default StyledInput;
