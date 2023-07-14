import React from 'react';
import type {ModalProps} from '@mui/material';

import {CustomModalProps} from './types';

import StyledModal from './Styles';

const Modal: React.FC<CustomModalProps & ModalProps> = ({color = 'primary', children, ...rest}) => {
    return (
        <StyledModal color={color} {...rest}>
            {children}
        </StyledModal>
    );
};

export default Modal;
