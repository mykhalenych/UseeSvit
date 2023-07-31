import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import {t} from 'i18next';
import {SetStateAction} from 'react';

import {StepTypes} from './StepTypes';
import FieldArray from '@/app/plan/FieldArray';

type Props = {
    expanded: StepTypes;
    setExpanded: React.Dispatch<React.SetStateAction<StepTypes>>;
    handleChange: (panel: SetStateAction<StepTypes>) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

const SecondStep: React.FC<Props> = ({expanded, handleChange, setExpanded}) => {
    return (
        <Accordion expanded={expanded === StepTypes.secondStep} onChange={handleChange(StepTypes.secondStep)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                <Typography sx={{width: '33%', flexShrink: 0}}>{t('plan.location')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FieldArray setExpanded={setExpanded} />
            </AccordionDetails>
        </Accordion>
    );
};

export default SecondStep;
