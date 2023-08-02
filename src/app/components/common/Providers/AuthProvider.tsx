'use client';

import {TypeComponentAuthFields, TypeUser} from '@/app/services/auth/types';
import {useRouter} from 'next/navigation';
import {Dispatch, createContext, FC, PropsWithChildren, SetStateAction, useState} from 'react';

type TypeContext = {
    user: TypeUser;
    setUser: Dispatch<SetStateAction<TypeUser>>;
};
export const AuthContext = createContext<TypeContext>({
    user: null,
    setUser: () => null,
});

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({children, Component}) => {
    const [user, setUser] = useState<TypeUser>(null);
    const router = useRouter();

    if (Component && Component.isOnlyUser) {
        if (!user) {
            router.push('/auth/login');
            return;
        }
    }
    return <AuthContext.Provider value={{user, setUser}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
