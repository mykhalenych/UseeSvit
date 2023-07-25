import React from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import {StyledToggleButton} from './Styles';

type CustomizedSwitchesProps = {
    language: string;
    onLanguageChange: (language: string) => void;
};

export default function ColorToggleButton({language, onLanguageChange}: CustomizedSwitchesProps) {
    const handleChange = (event: React.MouseEvent<HTMLElement>, newLanguage: string) => {
        if (newLanguage) {
            onLanguageChange(newLanguage);
        }
    };

    return (
        <ToggleButtonGroup color="primary" value={language} exclusive onChange={handleChange} aria-label="Platform">
            <StyledToggleButton value="en">En</StyledToggleButton>
            <StyledToggleButton value="ua">Ua</StyledToggleButton>
        </ToggleButtonGroup>
    );
}
