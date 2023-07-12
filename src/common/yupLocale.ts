import {setLocale} from 'yup';
import i18n from './i18n';

setLocale({
    mixed: {
        required: () => i18n.t('isRequired', {ns: 'validation'}),
    },
    string: {
        email: () => i18n.t('isValidEmail', {ns: 'validation'}),
        min: ({min}) => i18n.t('minLength', {ns: 'validation', min}),
    },
});
