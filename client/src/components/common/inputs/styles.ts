import {styled} from '@mui/material/styles';
import type {TextFieldProps} from '@mui/material';
import {TextField} from '@mui/material';

import {IThemeNames} from '../../../redux/common/types';
import {IInputProps} from './types';

const StyledInput = styled(TextField)<IInputProps & TextFieldProps>(({theme}) => ({
    textFieldRoot: {
        backgroundColor: theme.palette.background.default,
        borderRadius: 4,
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
        },

        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor:
                theme.palette.mode === IThemeNames.light ? theme.palette.text.secondary : 'rgba(255, 255, 255, 0.3)',
        },
    },
    inputEndAdornment: {
        padding: '7.5px',
        backgroundColor: theme.palette.background.paper,
        borderLeft: '1px solid rgb(196 196 196)',
    },
    autocompleteRoot: {
        '& .MuiAutocomplete-input': {
            minWidth: 'auto',
        },
    },
    autocompleteInputRoot: {
        '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"] .MuiAutocomplete-input': {
            padding: '1.5px 4px',
        },
        '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]': {
            padding: 3,
        },
    },
    autocompleteTagSizeSmall: {
        margin: 1,
    },
}));

export default StyledInput;
