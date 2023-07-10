import React from 'react';
import {Outlet} from 'react-router-dom';

import Navigation from '../../components/common/Navigation/Navigation';
import logInImage from '../../assets/img/logInImage.png';

import {ContainerDiv} from './Styles';

const AuthLayout = () => {
    return (
        <>
            <Navigation />
            <ContainerDiv>
                <img src={logInImage} alt={'logInImage'} />
                <Outlet />
            </ContainerDiv>
        </>
    );
};

export default AuthLayout;
