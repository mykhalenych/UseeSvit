import React, {useCallback, useEffect, useState} from 'react';
import {MenuItem, FormControl, InputLabel, Select as SelectMui} from '@mui/material';
import {ControllerRenderProps} from 'react-hook-form';
import type {SelectProps, SelectChangeEvent} from '@mui/material';

interface IProps {
    field?: ControllerRenderProps;
    name: string;
    options: any[];
    label?: string;
    value?: any;
    onChange: (value: string) => void;
    defaultValue?: string;
}

const Select: React.FC<IProps & SelectProps> = ({
    field,
    name,
    options,
    defaultValue = '',
    label,
    value,
    onChange,
    ...textFieldProps
}) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleChange = useCallback(
        (e: SelectChangeEvent<unknown>) => {
            const value = e.target.value as string;
            if (onChange) {
                onChange(value);
            }

            if (field?.onChange) {
                field.onChange(value);
            }

            setSelectedValue(value);
        },
        [field, onChange],
    );

    const initValue = useCallback(() => {
        setSelectedValue(value || field?.value || '');
    }, [value, field]);

    useEffect(() => {
        initValue();
    }, [initValue]);

    return (
        <FormControl fullWidth>
            <InputLabel id={`${name}-select-label`}>{label}</InputLabel>
            <SelectMui
                {...field}
                name={name}
                id={`${name}-select`}
                label={label}
                value={selectedValue}
                onChange={handleChange}
                {...textFieldProps}>
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.displayName}
                    </MenuItem>
                ))}
            </SelectMui>
        </FormControl>
    );
};

export default Select;
