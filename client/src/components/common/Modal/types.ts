import React from 'react';

export interface CustomModalProps {
    children: React.ReactNode;
    color: 'primary' | 'inherit' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}
