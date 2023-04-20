import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {trimStart} from 'lodash';
import type {TextFieldProps} from '@mui/material';

import {IInputEndAdornmentProps, IInputProps} from './types';

import StyledInput from './styles';

export const InputEndAdornment: React.FC<IInputEndAdornmentProps> = ({children}) => {
    return <div>{children}</div>;
};

const Input: React.FC<IInputProps & TextFieldProps> = ({
    field,
    label,
    value,
    defaultValue = '',
    onChange,
    margin = 'dense',
    ...textFieldProps
}) => {
    const [currentValue, setCurrentValue] = useState(defaultValue);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            if (onChange) {
                onChange(e);
            }

            const changedValue = trimStart(e.target.value);

            if (field?.onChange) {
                field.onChange(changedValue);
            }

            setCurrentValue(changedValue);
        },
        [field, onChange],
    );

    const initValue = useCallback(() => {
        setCurrentValue(value || field?.value || '');
    }, [value, field]);

    useEffect(() => {
        initValue();
    }, [initValue]);

    return (
        <StyledInput
            {...field}
            onChange={handleChange}
            variant="standard"
            label={label}
            size="small"
            margin={margin}
            value={currentValue}
            {...textFieldProps}
        />
    );
};

export default Input;
