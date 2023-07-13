import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Navigation from '../../components/common/Navigation/Navigation';
import {useAppDispatch} from '../../redux/store';
import {fetchUser} from '../../redux/auth/thunks';
import {authThunkNames} from '../../redux/auth/constants';
import {getAuthTokens} from '../../common/utils';
import {selectLoading} from '../../redux/selectors';
import {ISlicesNames} from '../../redux/types';
import {Progress} from '../../components/common/loader/Progress';

import {BgDiv, Main, Footer} from './Styles';
import {BoxLoader} from '../../components/common/loader/Styles';

const MainLayout = () => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(selectLoading(ISlicesNames.auth, authThunkNames.fetchUser));

    useEffect(() => {
        const token = getAuthTokens();

        if (token) {
            dispatch(fetchUser());
        }
    }, [dispatch]);

    return (
        <BgDiv>
            <Navigation />
            {isLoading && (
                <BoxLoader>
                    <Progress />
                </BoxLoader>
            )}
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </BgDiv>
    );
};
export default MainLayout;
