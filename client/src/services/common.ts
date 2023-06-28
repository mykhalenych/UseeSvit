import type {AxiosResponse, Method} from 'axios';
import axios, {AxiosError} from 'axios';
import i18n from '../common/i18n';

import {IError, IFetch} from './types';
import {getToken, removeToken} from './utils';
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
            'Content-Type': 'application/json',
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
            if (err?.response?.status === 401) {
                removeToken();
            }
            throw err?.response?.data.message || i18n.t('somethingWentWrong');
        });
};
