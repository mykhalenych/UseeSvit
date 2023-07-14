'use client';

import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useSnackbar} from 'notistack';
import type {VariantType} from 'notistack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {selectMessages, hideMessage, removeMessage} from '../../redux/snackbar/slice';
import {useAppDispatch} from '../../redux/store';

export const Snackbar: React.FC = () => {
    const [displayed, setDisplayed] = useState<number[]>([]);

    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const messages = useSelector(selectMessages);
    const dispatch = useAppDispatch();

    const storeDisplayed = useCallback((id: number) => setDisplayed((prev) => [...prev, id]), []);

    const removeDisplayed = useCallback((id: number) => setDisplayed((prev) => prev.filter((key) => id !== key)), []);

    useEffect(() => {
        messages.forEach((item) => {
            if (displayed.includes(item.id)) return;

            enqueueSnackbar(item.message, {
                preventDuplicate: true,
                key: item.id,
                variant: item.severity as VariantType,
                hideIconVariant: true,
                onClose: (event, reason, key) => {
                    if (reason === 'timeout' || reason === 'maxsnack') {
                        dispatch(hideMessage({id: key}));
                    }
                },
                onExited: (event, myKey) => {
                    dispatch(removeMessage(myKey));
                    removeDisplayed(Number(myKey));
                },
                action: () => (
                    <IconButton onClick={() => closeSnackbar(item.id)}>
                        <CloseIcon htmlColor="white" fontSize="small" />
                    </IconButton>
                ),
            });

            storeDisplayed(item.id);
        });
    }, [messages, dispatch, enqueueSnackbar, closeSnackbar, displayed, storeDisplayed, removeDisplayed]);

    return null;
};
