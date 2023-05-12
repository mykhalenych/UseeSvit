import {SignInRequest, LogInRequest, ForgotPasswordRequest} from './types';
import {fetchWrap} from '../common';

export const register = ({email, password, name}: SignInRequest) => {
    const request = {url: '/registration', body: {email, password, name}};
    return fetchWrap({request, isAuth: true, method: 'POST'});
};

export const login = ({email, password}: LogInRequest) => {
    const request = {url: '/login', body: {email, password}};
    return fetchWrap({request, isAuth: true, method: 'POST'});
};

export const logout = async () => {
    const request = {url: `/logout`};
    return fetchWrap({request, method: 'POST'});
};

export const activate = (activationToken: string) => {
    const request = {url: `/activation/${activationToken}`};
    return fetchWrap({request, isAuth: true, method: 'GET'});
};

export const getUser = () => {
    const request = {url: '/users/me'};
    return fetchWrap({request, method: 'POST'});
};

export const resetPassword = async (data: ForgotPasswordRequest) => {
    const request = {url: '/reset', body: data};
    return await fetchWrap({method: 'POST', request, isAuth: true});
};
