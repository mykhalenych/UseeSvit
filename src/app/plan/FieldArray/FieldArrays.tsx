import {useState} from 'react';
import {FieldValues, useFieldArray, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Grid, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import GoogleAutocompleteControl from '@/app/components/common/form/GoogleAutocompleteControl';
import {StyledButton} from '@/app/plan/FieldArray/Styles';

const FieldArray = () => {
    const [hoveredElement, setHoveredElement] = useState<null | string>(null);
    const {t} = useTranslation();
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

    const onNext = () => {
        // eslint-disable-next-line no-console
        console.log('next');
    };

    return (
        <>
            <Grid container alignItems="center">
                <Grid item xs>
                    {fields.map(({id}, index) => (
                        <Grid
                            key={id}
                            container
                            alignItems="center"
                            justifyContent="center"
                            onMouseOver={() => setHoveredElement(id)}
                            onMouseOut={() => setHoveredElement(null)}>
                            <Grid item xs mr="10px">
                                <GoogleAutocompleteControl
                                    control={control}
                                    {...register(`additional.${index}.value`)}
                                />
                            </Grid>
                            {fields.length !== 2 && (
                                <Grid item visibility={hoveredElement === id ? 'visible' : 'hidden'}>
                                    <IconButton onClick={() => onRemove(index)}>
                                        <ClearIcon />
                                    </IconButton>
                                </Grid>
                            )}
                        </Grid>
                    ))}
                </Grid>
                {fields.length === 2 && (
                    <Grid item>
                        <IconButton onClick={onReverse}>
                            <SwapVertIcon />
                        </IconButton>
                    </Grid>
                )}
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                    <StyledButton type="button" onClick={onAppend}>
                        <AddIcon />
                        {t('addDestination')}
                    </StyledButton>
                </Grid>
                <Grid item>
                    <StyledButton type="button" onClick={onNext}>
                        {t('next')}
                    </StyledButton>
                </Grid>
            </Grid>
        </>
    );
};

export default FieldArray;
