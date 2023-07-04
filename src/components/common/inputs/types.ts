import React, {ChangeEvent} from 'react';
import {ControllerRenderProps} from 'react-hook-form';
import type {AutocompleteRenderOptionState} from '@mui/material';

export interface IInputProps {
    field?: ControllerRenderProps;
    value?: any;
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export interface IInputEndAdornmentProps {
    children: React.ReactNode;
}

export interface IAutocompleteProps {
    label?: string;
    options: any[];
    labelKey?: string;
    valueKey?: string;
    disabled?: boolean;
    loading?: boolean;
    freeSolo?: boolean;
    placeholder?: string;
    disableClearable?: boolean;
    renderOption?: (option: any, state: AutocompleteRenderOptionState) => React.ReactNode;
    getSelectedValue?: (currentValue: string, options: any[], getValue: (option: any) => string) => string | null;
    margin?: 'none' | 'dense' | 'normal';
    onChange?: (value: string) => void;
}
