import React from 'react';

type CustomizedSwitchesProps = {
    language: string;
    onLanguageChange: (language: string) => void;
};

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {StyledToggleButton} from './Styles';

export default function ColorToggleButton({language, onLanguageChange}: CustomizedSwitchesProps) {
    const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        if (newAlignment) {
            onLanguageChange(newAlignment);
        }
    };

    return (
        <ToggleButtonGroup color="primary" value={language} exclusive onChange={handleChange} aria-label="Platform">
            <StyledToggleButton value="en">En</StyledToggleButton>
            <StyledToggleButton value="ua">Ua</StyledToggleButton>
        </ToggleButtonGroup>
    );
}
