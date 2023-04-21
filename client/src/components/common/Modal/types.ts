import React from 'react';

export interface CustomModalProps {
    open: boolean;
    children: React.ReactNode;
    color: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}
