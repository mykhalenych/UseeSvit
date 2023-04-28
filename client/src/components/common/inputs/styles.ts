import {styled} from '@mui/material/styles';
import type {TextFieldProps} from '@mui/material';
import {TextField} from '@mui/material';

import {IInputProps} from './types';
import {findLastIndex} from 'lodash';

const StyledInput = styled(TextField)<IInputProps & TextFieldProps>(({theme}) => ({
    width: 240,

    '& .MuiInputBase-root': {
        minHeight: 56,
    },
    '&  .MuiFormLabel-root': {
        lineHeight: '36px',
    },
    ' & .MuiInputBase-input': {
        padding: '0 5px 0 5px',
        height: '100%',
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
