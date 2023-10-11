import {useState} from 'react';
import {useFieldArray, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useStateMachine} from 'little-state-machine';
import {Grid, IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import GoogleAutocompleteControl from '@/app/components/common/form/GoogleAutocompleteControl';
import Button from '@/app/components/common/Button';
import {StyledButton} from '@/app/plan/FieldArray/Styles';
import {StepTypes} from '@/app/plan/search-form/StepTypes';
import updateAction from '@/app/plan/search-form/updateAction';

type Props = {
    setExpanded: any;
};

const FieldArray: React.FC<Props> = ({setExpanded}) => {
    const [hoveredElement, setHoveredElement] = useState<null | string>(null);

    const {t} = useTranslation();
    const methods = useForm<any>({
        defaultValues: {
            fields: [{value: ''}, {value: ''}],
        },
    });
    const {handleSubmit, control, register} = methods;
    const {fields, append, remove, move} = useFieldArray({control, name: 'fields'});
    const {actions} = useStateMachine({updateAction});

    const onSubmit = (data: string) => {
        actions.updateAction(data);
        setExpanded(StepTypes.thirdStep);
    };

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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            </Grid>
            <Button variant="contained" color="primary" type="submit" minWidth={100}>
                {t('plan.nextButton')}
            </Button>
        </form>
    );
};

export default FieldArray;
