import React from 'react';
import {FormControlLabel} from '@mui/material';

import {Android12Switch} from './Styles';

type CustomizedSwitchesProps = {
    language: string;
    onLanguageChange: (language: string) => void;
};

export default function CustomizedSwitches({language, onLanguageChange}: CustomizedSwitchesProps) {
    return (
        <FormControlLabel
            control={
                <Android12Switch defaultChecked onChange={() => onLanguageChange(language === 'en' ? 'ua' : 'en')} />
            }
            label={language === 'en' ? 'English' : 'Ukrainian'}
        />
    );
}
