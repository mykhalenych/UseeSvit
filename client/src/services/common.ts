import axios, {AxiosError} from 'axios';
import type {AxiosResponse, Method} from 'axios';

import {IError, IFetch} from './types';
import {getToken} from './utils';
import {API_URL} from './constants';

export const fetchWrap = async ({
    request,
    method = 'GET',
    override = {},
    responseType = 'json',
    isAuth = false,
}: IFetch) => {
    axios.defaults.baseURL = API_URL;
    const token = getToken();

    if (!token && !isAuth) {
        throw new Error('Token has been expired or revoked');
    }

    const headers = {
        ...(!isAuth && {
            Authorization: `Bearer ${token}`,
        }),
        ...override,
    };
    return axios
        .request({
            url: request.url,
            method: method as Method,
            headers,
            data: request.body,
            responseType: responseType,
        })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError<IError>) => {
            throw err?.response?.data.message || 'Something went wrong';
        });
};
