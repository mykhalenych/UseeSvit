import React from 'react';
import {CircularProgress, type ButtonProps} from '@mui/material';

import StyledButton from './Styles';
import {CustomButtonProps} from './types';

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
            {isLoading ? <CircularProgress size={34} thickness={5} color="inherit" /> : children}
        </StyledButton>
    );
};

export default Button;
