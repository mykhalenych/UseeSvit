'use client';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {IPlan} from './types';
import {defaultValues, validation} from './form';
import GoogleMapsLoader from '../layouts/GoogleMapsLoader';

const Plan = () => {
    const methods = useForm<IPlan>({
        resolver: yupResolver(validation),
        defaultValues,
    });

    return <GoogleMapsLoader methods={methods} />;
};

export default Plan;
