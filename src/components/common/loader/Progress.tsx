'use client';

import React, {useEffect, useState} from 'react';
import {CircularProgress} from '@mui/material';

import {BoxLoader} from './Styles';

export const Progress = () => {
    const [level, setLevel] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
        }, 400);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <BoxLoader>
            <CircularProgress variant="determinate" value={level} color="primary" size={60} thickness={3} />
        </BoxLoader>
    );
};
