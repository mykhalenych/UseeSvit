import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {useStateMachine} from 'little-state-machine';
import {SetStateAction} from 'react';
import {useForm} from 'react-hook-form';

import Button from '@/app/components/common/Button';
import {StepTypes} from './StepTypes';
import updateAction from './updateAction';

type Props = {
    expanded: StepTypes;
    setExpanded: React.Dispatch<React.SetStateAction<StepTypes>>;
    handleChange: (panel: SetStateAction<StepTypes>) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

const ThirdStep: React.FC<Props> = ({expanded, handleChange, setExpanded}) => {
    const methods = useForm<any>();

    const {handleSubmit} = methods;

    const {actions} = useStateMachine({updateAction});

    const onSubmit = (data: string) => {
        actions.updateAction(data);
        setExpanded(StepTypes.notActive);
    };

    return (
        <Accordion expanded={expanded === StepTypes.thirdStep} onChange={handleChange(StepTypes.thirdStep)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                <Typography sx={{width: '33%', flexShrink: 0}}>Search</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Button variant="contained" color="primary" type="submit" minWidth={100}>
                        Search
                    </Button>
                </form>
            </AccordionDetails>
        </Accordion>
    );
};

export default ThirdStep;
