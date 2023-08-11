import {useRouter} from 'next/navigation';
import {useEffect} from 'react';

import {getAuthTokens} from '@/app/common/utils';
import {LOGIN_PATH} from '@/Routes/constants';

export const useAuthentication = (isProtected: boolean) => {
    const router = useRouter();
    const isAuthenticated = getAuthTokens();

    useEffect(() => {
        if (!isAuthenticated && isProtected) {
            router.replace(LOGIN_PATH);
        }
        if (isAuthenticated && !isProtected) {
            router.replace('/');
        }
    }, [isAuthenticated, isProtected, router]);

    return isAuthenticated;
};
