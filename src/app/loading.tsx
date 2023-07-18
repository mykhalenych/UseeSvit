'use client';

import {BoxLoader} from '@/components/common/loader/Styles';
import {CSSProperties} from 'react';
import {RingLoader} from 'react-spinners';

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
