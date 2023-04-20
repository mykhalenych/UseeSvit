import React from 'react';
import type {ModalProps} from '@mui/material';

import StyledModal from './styles';
import {CustomModalProps} from './types';

const Modal: React.FC<CustomModalProps & ModalProps> = ({color = 'primary', children, ...rest}) => {
    return (
        <StyledModal color={color} {...rest}>
            {children}
        </StyledModal>
    );
};

export default Modal;
