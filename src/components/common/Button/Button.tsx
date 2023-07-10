import React from 'react';
import type {ButtonProps} from '@mui/material';

import StyledButton from './Styles';
import {CustomButtonProps} from './types';
import {Progress} from '../Progress';

const Button: React.FC<CustomButtonProps & ButtonProps> = ({
    minWidth = 240,

    isLoading = false,
    variant = 'outlined',
    color = 'primary',
    children,
    ...rest
}) => {
    return (
        <StyledButton sx={{minWidth: minWidth}} variant={variant} color={color} {...rest}>
            {isLoading ? <Progress /> : children}
        </StyledButton>
    );
};

export default Button;
