import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Grid} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {useStateMachine} from 'little-state-machine';
import {SetStateAction} from 'react';
import {useForm} from 'react-hook-form';

import Button from '@/app/components/common/Button';
import InputControl from '@/app/components/common/form/InputControl';
import {StepTypes} from './StepTypes';
import updateAction from './updateAction';

type Props = {
    expanded: StepTypes;
    setExpanded: React.Dispatch<React.SetStateAction<StepTypes>>;
    handleChange: (panel: SetStateAction<StepTypes>) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

const FirstStep: React.FC<Props> = ({expanded, handleChange, setExpanded}) => {
    const methods = useForm<any>();
    const {handleSubmit, control} = methods;

    const {actions} = useStateMachine({updateAction});

    const onSubmit = (data: string) => {
        actions.updateAction(data);
        setExpanded(StepTypes.secondStep);
    };

    return (
        <Accordion expanded={expanded === StepTypes.firstStep} onChange={handleChange(StepTypes.firstStep)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                <Typography sx={{width: '33%', flexShrink: 0}}>Type of activities</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid>
                        <Grid item xs={12}>
                            <InputControl control={control} label="activity" name="activity" fullWidth />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit" minWidth={100}>
                        NEXT
                    </Button>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default FirstStep;
