import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {t} from 'i18next';
import {useStateMachine} from 'little-state-machine';
import {SetStateAction} from 'react';
import {useForm} from 'react-hook-form';

import Button from '@/app/components/common/Button';
import {StepTypes} from './StepTypes';
import updateAction from './updateAction';
import FieldArray from '@/app/plan/FieldArray';

type Props = {
    expanded: StepTypes;
    setExpanded: React.Dispatch<React.SetStateAction<StepTypes>>;
    handleChange: (panel: SetStateAction<StepTypes>) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

const SecondStep: React.FC<Props> = ({expanded, handleChange, setExpanded}) => {
    //TODO: Add types after it's known what will be in the useForm
    const methods = useForm<any>();
    const {handleSubmit, control} = methods;

    const {actions} = useStateMachine({updateAction});

    const onSubmit = (data: string) => {
        actions.updateAction(data);
        setExpanded(StepTypes.thirdStep);
    };

    return (
        <Accordion expanded={expanded === StepTypes.secondStep} onChange={handleChange(StepTypes.secondStep)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                <Typography sx={{width: '33%', flexShrink: 0}}>{t('plan.location')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FieldArray control={control} />
                    <Button variant="contained" color="primary" type="submit" minWidth={100}>
                        {t('plan.nextButton')}
                    </Button>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default SecondStep;
