'use client';

import {CSSProperties} from 'react';
import {RingLoader} from 'react-spinners';

import {BoxLoader} from '@/components/common/loader/Styles';

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'blue',
};
export default function Loading() {
    return (
        <BoxLoader>
            <RingLoader cssOverride={override} color="#808080" size={80} />
        </BoxLoader>
    );
}
