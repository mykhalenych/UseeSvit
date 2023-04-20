import React from 'react';
import type {TextFieldProps} from '@mui/material';
import {useController, useFormContext, Control} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {get} from 'lodash';

import Input from '../inputs/Input';

interface IInputProps {
    control: Control<any>;
    name: string;
}

const InputControl: React.FC<IInputProps & TextFieldProps> = ({control, name, label, defaultValue, ...restProps}) => {
    const {formState} = useFormContext();
    const {errors} = formState;
    const {field} = useController({
        name,
        control,
        defaultValue,
    });

    const errorProps = {
        error: Boolean(get(errors, name)),
        helperText: <ErrorMessage errors={errors} name={name} render={({message}) => message} />,
    };

    return (
        <Input
            field={field}
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
