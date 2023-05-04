import React, {SyntheticEvent, useCallback, useEffect, useMemo, useState} from 'react';
import {ControllerRenderProps} from 'react-hook-form';
import {isObject, isFunction} from 'lodash';
import {Autocomplete as MUIAutocomplete} from '@mui/material';

import {IAutocompleteProps} from './types';

import StyledInput from './styles';

interface IProps extends IAutocompleteProps {
    field?: ControllerRenderProps;
    value?: any;
    onChange?: (data: any) => void;
    textFieldProps?: any;
    disableClearable?: boolean;
    getOptionDisabled?: (option: any) => boolean;
    handleInputChange?: (value: string) => void;
}

const Autocomplete: React.FC<IProps> = ({
    field,
    label,
    placeholder,
    options,
    labelKey = 'label',
    valueKey = 'id',
    value,
    onChange,
    textFieldProps,
    disableClearable = false,
    margin = 'normal',
    getOptionDisabled,
    getSelectedValue,
    handleInputChange,
    ...restProps
}) => {
    const [currentValue, setCurrentValue] = useState('');

    const isItemObject = useMemo(() => {
        if (options.length) {
            return isObject(options[0]);
        }

        return false;
    }, [options]);

    const getValue = useCallback(
        (option: any) => {
            if (isItemObject) {
                return option ? option[valueKey] : '';
            }

            return option || '';
        },
        [valueKey, isItemObject],
    );

    const selectedValue = useMemo(() => {
        if (isFunction(getSelectedValue)) {
            return getSelectedValue(currentValue, options, getValue);
        }

        if (currentValue) {
            return options.find((option) => getValue(option) === currentValue) || null;
        }

        return null;
    }, [currentValue, options, getSelectedValue, getValue]);

    const getLabel = useCallback(
        (option: any) => {
            if (isItemObject) {
                return option ? option[labelKey] : '';
            }

            return option || '';
        },
        [labelKey, isItemObject],
    );

    const handleChange = useCallback(
        (e: SyntheticEvent<Element, Event>, data: any) => {
            const val = getValue(data);

            if (onChange) {
                onChange(val);
            }

            if (field?.onChange) {
                field.onChange(val);
            }

            setCurrentValue(val);
        },
        [field, onChange, getValue],
    );

    const initValue = useCallback(() => {
        setCurrentValue(value || field?.value);
    }, [value, field]);

    useEffect(() => {
        initValue();
    }, [initValue]);

    return (
        <MUIAutocomplete
            {...field}
            options={options}
            getOptionLabel={getLabel}
            onChange={handleChange}
            onInputChange={(event, value, reason) => {
                if (reason === 'input' && handleInputChange) {
                    handleInputChange(value);
                }
            }}
            renderInput={(params) => (
                <StyledInput
                    {...params}
                    label={label}
                    placeholder={placeholder}
                    variant="outlined"
                    margin={margin}
                    size="small"
                    {...textFieldProps}
                />
            )}
            loadingText="Loading..."
            defaultValue={selectedValue}
            value={selectedValue}
            disableClearable={disableClearable}
            getOptionDisabled={getOptionDisabled}
            {...restProps}
        />
    );
};

export default Autocomplete;
