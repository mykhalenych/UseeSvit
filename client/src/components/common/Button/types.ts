import React from 'react';

export interface CustomButtonProps {
    minWidth?: number;
    variant: 'text' | 'outlined' | 'contained';
    children: React.ReactNode;
    color: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}
