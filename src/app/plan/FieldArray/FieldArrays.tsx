import {FieldValues, useFieldArray, useForm} from 'react-hook-form';
import {Grid, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import GoogleAutocompleteControl from '@/app/components/common/form/GoogleAutocompleteControl';
import {StyledButton} from '@/app/plan/FieldArray/Styles';

const FieldArray = () => {
    const {register, control} = useForm<FieldValues>({
        defaultValues: {
            additional: [{value: ''}, {value: ''}],
        },
    });
    const {fields, append, remove, move} = useFieldArray({control, name: 'additional'});

    const onAppend = () => {
        append({value: ''});
    };

    const onRemove = (index: number) => {
        remove(index);
    };

    const onReverse = () => {
        move(0, 1);
    };

    return (
        <>
            <Grid container alignItems="center">
                <Grid item xs={10}>
                    {fields.map((field, index) => (
                        <Grid item key={field.id}>
                            <GoogleAutocompleteControl control={control} {...register(`additional.${index}.value`)} />
                            {fields.length !== 2 && (
                                <IconButton onClick={() => onRemove(index)}>
                                    <ClearIcon />
                                </IconButton>
                            )}
                        </Grid>
                    ))}
                </Grid>
                {fields.length === 2 && (
                    <Grid item xs={1}>
                        <IconButton onClick={onReverse}>
                            <SwapVertIcon />
                        </IconButton>
                    </Grid>
                )}
            </Grid>
            <StyledButton type="button" onClick={onAppend}>
                <AddIcon />
                add destination
            </StyledButton>
        </>
    );
};

export default FieldArray;
