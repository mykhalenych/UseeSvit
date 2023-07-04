import React from 'react';
import {Control, useFormContext, useController} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import get from 'lodash/get';

import Autocomplete from '../inputs/Autocomplete';
import {IAutocompleteProps} from '../inputs/types';

interface IProps extends IAutocompleteProps {
    control: Control<any>;
    name: string;
    getOptionDisabled?: (option: any) => boolean;
}

const AutocompleteControl: React.FC<IProps> = ({
    control,
    name,
    label,
    margin = 'dense',
    getOptionDisabled,
    ...restProps
}) => {
    const {formState} = useFormContext();
    const {errors} = formState;
    const {field} = useController({
        name,
        control,
    });

    const errorProps = {
        error: Boolean(get(errors, name)),
        helperText: <ErrorMessage errors={errors} name={name} render={({message}) => message} />,
    };

    return (
        <Autocomplete
            field={field}
            label={label}
            margin={margin}
            textFieldProps={errorProps}
            getOptionDisabled={getOptionDisabled}
            {...restProps}
        />
    );
};

export default AutocompleteControl;
