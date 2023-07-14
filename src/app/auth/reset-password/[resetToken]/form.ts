import {string, object, ref} from 'yup';
import i18n from '../../../common/i18n';

export const defaultValues = {
    newPassword: '',
    passwordConfirmation: '',
};

export const validation = object().shape({
    newPassword: string().required().min(8),
    passwordConfirmation: string()
        .required()
        .oneOf([ref('newPassword')], () => i18n.t('isMatch', {ns: 'validation'})),
});
