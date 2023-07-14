import React from 'react';
import type {TextFieldProps} from '@mui/material';
import {
    useController,
    useFormContext,
    Control,
    FieldValues,
    Path,
    PathValue,
    ControllerRenderProps,
} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {get} from 'lodash';

import Input from '../inputs/Input';

interface IInputProps<T extends FieldValues> {
    control: Control<T>;
    name: string;
}

const InputControl = <T extends FieldValues>({
    control,
    name,
    label,
    defaultValue,
    ...restProps
}: IInputProps<T> & TextFieldProps) => {
    const {formState} = useFormContext();
    const {errors} = formState;
    const {field} = useController({
        name: name as Path<T>,
        control,
        defaultValue: defaultValue as PathValue<T, Path<T>>,
    });

    const errorProps = {
        error: Boolean(get(errors, name)),
        helperText: <ErrorMessage errors={errors} name={name} render={({message}) => message} />,
    };

    return (
        <Input
            field={field as ControllerRenderProps<T, Path<T>> & ControllerRenderProps}
            onChange={field.onChange}
            value={field.value}
            variant="outlined"
            size="small"
            label={label}
            {...restProps}
            {...errorProps}
        />
    );
};

export default InputControl;
