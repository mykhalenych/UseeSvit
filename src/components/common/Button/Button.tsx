import React from 'react';
import type {ButtonProps} from '@mui/material';

import StyledButton from './Styles';
import {CustomButtonProps} from './types';
import {Progress} from '../Progress';

// type ButtonPropsWithoutColor = Omit<ButtonProps, 'color'>;

// interface ButtonWithLoadingProps extends Omit<CustomButtonProps, 'children'>, ButtonPropsWithoutColor {
//     isLoading?: boolean;
// }
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
