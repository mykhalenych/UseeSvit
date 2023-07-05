import React from 'react';
import {ErrorMessage} from '@hookform/error-message';
import {Control, get, useController, useFormContext} from 'react-hook-form';
import Select from '../inputs/Select';

interface IProps {
    control: Control<any>;
    name: string;
    options: any[];
    label: string;
    defaultValue: string;
}

export const SelectControl: React.FC<IProps> = ({control, name, options, label, defaultValue, ...restProps}) => {
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

    return <Select field={field} name={name} options={options} label={label} {...restProps} {...errorProps} />;
};

export default SelectControl;
