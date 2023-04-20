import {styled} from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import type {ModalProps} from '@mui/material';
import {CustomModalProps} from './types';

const StyledModal = styled(Modal)<CustomModalProps & ModalProps>(({theme}) => ({
    borderRadius: 20,
    minHeight: 720,
    minWidth: 540,
    backgroundColor: theme.palette.background.default,
}));

export default StyledModal;
