import {styled} from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import type {ModalProps} from '@mui/material';

import {CustomModalProps} from './types';

const StyledModal = styled(Modal)<CustomModalProps & ModalProps>(({theme}) => ({
    borderRadius: 20,
    backgroundColor: theme.palette.background.default,
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

export default StyledModal;
