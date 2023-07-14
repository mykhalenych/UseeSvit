import {fetchWrap} from '../common';
import {NewPasswordRequest} from './types';

export const changeName = (newName: string) => {
    const request = {url: '/change-name', body: {newName}};
    return fetchWrap({request, method: 'POST'});
};

export const changePassword = ({password, newPassword, passwordConfirmation}: NewPasswordRequest) => {
    const request = {url: '/change-password', body: {password, newPassword, passwordConfirmation}};
    return fetchWrap({request, method: 'POST'});
};
