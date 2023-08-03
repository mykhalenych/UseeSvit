import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

import {getAuthTokens} from '@/app/common/utils';
import {LOGIN_PATH} from '@/Routes/constants';

export const useAuthentication = () => {
    const router = useRouter();
    const isAuthenticated = getAuthTokens();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace(LOGIN_PATH);
        } else {
            router.replace('/');
        }
    }, [isAuthenticated, router]);

    return isAuthenticated;
};
