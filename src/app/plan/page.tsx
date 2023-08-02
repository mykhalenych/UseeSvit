'use client';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {IPlan} from './types';
import {defaultValues, validation} from './form';
import GoogleMapsLoader from './GoogleMapsLoader';
import {NextPageAuth} from '../services/auth/types';

const Plan: NextPageAuth = () => {
    const methods = useForm<IPlan>({
        resolver: yupResolver(validation),
        defaultValues,
    });

    return <GoogleMapsLoader methods={methods} />;
};

Plan.isOnlyUser = true;

export default Plan;
