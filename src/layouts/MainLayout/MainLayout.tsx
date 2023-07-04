import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';

import Navigation from '../../components/common/Navigation/Navigation';

import {BgDiv, Main, Footer} from './Styles';
import {fetchUser} from '../../redux/auth/thunks';
import {useAppDispatch} from '../../redux/store';
import {getAuthTokens} from '../../common/utils';

const MainLayout = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = getAuthTokens();

        if (token) {
            dispatch(fetchUser());
        }
    }, [dispatch]);

    return (
        <BgDiv>
            <Navigation />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </BgDiv>
    );
};
export default MainLayout;
