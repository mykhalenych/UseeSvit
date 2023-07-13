'use client';

import Image from 'next/image';

import {ContainerDiv} from './Styles';
import logInImage from '@images/logInImage.png';

type Props = {
    children: React.ReactNode;
};

const AuthLayout: React.FC<Props> = ({children}) => {
    return (
        <ContainerDiv>
            <Image src={logInImage} alt={`image`} width={1000} height={1000} style={{height: '100%'}} />
            {children}
        </ContainerDiv>
    );
};

export default AuthLayout;
