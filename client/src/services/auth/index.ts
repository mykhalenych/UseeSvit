import {SignInRequest} from './types';
import {fetchWrap} from '../common';

export const register = ({email, password, name}: SignInRequest) => {
    const request = {url: '/registration', body: {email, password, name}};
    return fetchWrap({request, isAuth: true, method: 'GET'});
};

export const login = ({email, password}: any) => {
    const request = {url: '/login', body: {email, password}};

    return fetchWrap({request, isAuth: true, method: 'POST'});
};

export const logout = async () => {
    const request = {url: `/logout`};
    return fetchWrap({request, isAuth: true, method: 'POST'});
};

export const activate = (activationToken: string) => {
    const request = {url: `/activation/${activationToken}`};
    return fetchWrap({request, isAuth: true, method: 'GET'});
};

export const refresh = () => {
    const request = {url: '/refresh/'};
    return fetchWrap({request, isAuth: true, method: 'GET'});
};
