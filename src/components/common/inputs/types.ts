import React, {ChangeEvent} from 'react';
import {ControllerRenderProps} from 'react-hook-form';

export interface IInputProps {
    field?: ControllerRenderProps;
    value?: any;
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export interface IInputEndAdornmentProps {
    children: React.ReactNode;
}
