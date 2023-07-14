import * as yup from 'yup';
import i18n from '../../../common/i18n';
import '../../../common/yupLocale';

export const defaultValues = {
    newPassword: '',
    passwordConfirmation: '',
};

export const validation = yup.object().shape({
    newPassword: yup.string().required().min(8),
    passwordConfirmation: yup
        .string()
        .required()
        .oneOf([yup.ref('newPassword')], () => i18n.t('isMatch', {ns: 'validation'})),
});
