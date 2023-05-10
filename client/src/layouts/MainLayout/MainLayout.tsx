import React from 'react';
import {Outlet} from 'react-router-dom';

import Navigation from '../../components/common/Navigation/Navigation';
import {BgDiv, Main, Footer, ImgWrap} from './styles';

const MainLayout = () => {
    return (
        <BgDiv>
            <Navigation />
            <Main>
                <ImgWrap />
                <Outlet />
            </Main>
            <Footer />
        </BgDiv>
    );
};
export default MainLayout;
