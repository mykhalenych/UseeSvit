import React, {useCallback, useEffect, useState} from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import {Control, ControllerRenderProps, FieldValues, Path, useController, useFormContext} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';
import {get} from 'lodash';
import type {TextFieldProps} from '@mui/material';

import Autocomplete from '../inputs/Autocomplete';

interface IGoogleAutocompleteProps<T extends FieldValues> {
    control: Control<T>;
    name: string;
    placeholder: string;
}

const GoogleAutocompleteControl = <T extends FieldValues>({
    control,
    name,
    placeholder,
}: IGoogleAutocompleteProps<T> & TextFieldProps) => {
    const {placesService, placePredictions, getPlacePredictions} = usePlacesService({});

    const [options, setOptions] = useState<google.maps.GeocoderAddressComponent[]>([]);

    const {formState} = useFormContext();
    const {errors} = formState;
    const {field} = useController({
        name: name as Path<T>,
        control,
    });

    const errorProps = {
        error: Boolean(get(errors, name)),
        helperText: <ErrorMessage errors={errors} name={name} render={({message}) => message} />,
    };

    const handleInputChange = useCallback(
        (value: string) => {
            getPlacePredictions({input: value});
        },
        [getPlacePredictions],
    );

    useEffect(() => {
        if (placePredictions.length)
            placesService?.getDetails(
                {
                    placeId: placePredictions[0].place_id,
                },
                (placeDetails) => {
                    setOptions(placeDetails?.address_components || []);
                },
            );
    }, [placePredictions, placesService]);

    return (
        <Autocomplete
            field={field as ControllerRenderProps<T, Path<T>> & ControllerRenderProps}
            options={options}
            placeholder={placeholder}
            labelKey="long_name"
            valueKey="short_name"
            textFieldProps={errorProps}
            handleInputChange={handleInputChange}
        />
    );
};

export default GoogleAutocompleteControl;
