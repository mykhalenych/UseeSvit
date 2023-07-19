import React from 'react';
import {CircularProgress, type ButtonProps} from '@mui/material';

import StyledButton from './Styles';
import {CustomButtonProps} from './types';

const Button: React.FC<CustomButtonProps & ButtonProps> = ({
    minWidth = 240,
    variant = 'outlined',
    color = 'primary',
    isLoading = false,
    children,
    ...rest
}) => {
    return (
        <StyledButton sx={{minWidth: minWidth}} variant={variant} color={color} {...rest}>
            {isLoading ? <CircularProgress color="inherit" size={24} thickness={3} /> : children}
        </StyledButton>
    );
};

export default Button;
