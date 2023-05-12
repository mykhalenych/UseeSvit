import React from 'react';
import {Outlet} from 'react-router-dom';

import Navigation from '../../components/common/Navigation/Navigation';
import LogInImage from '../../assets/img/LogInImage.png';

import {ContainerDiv} from './styles';

const AuthLayout = () => {
    return (
        <>
            <Navigation />
            <ContainerDiv>
                <img src={LogInImage} alt={'logInImage'} />
                <Outlet />
            </ContainerDiv>
        </>
    );
};

export default AuthLayout;
