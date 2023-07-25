import {StateMachineProvider, createStore} from 'little-state-machine';
import {SetStateAction, useState} from 'react';

import FirstStep from './Step1';
import SecondStep from './Step2';
import ThirdStep from './Step3';
import {StepTypes} from './StepTypes';

const SearchForm = () => {
    createStore({
        activity: '',
        location: '',
    });

    const [expanded, setExpanded] = useState<StepTypes>(StepTypes.firstStep);

    const handleChange = (panel: SetStateAction<StepTypes>) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : StepTypes.notActive);
    };

    return (
        <StateMachineProvider>
            <FirstStep expanded={expanded} handleChange={handleChange} setExpanded={setExpanded} />
            <SecondStep expanded={expanded} handleChange={handleChange} setExpanded={setExpanded} />
            <ThirdStep expanded={expanded} handleChange={handleChange} setExpanded={setExpanded} />
        </StateMachineProvider>
    );
};

export default SearchForm;
