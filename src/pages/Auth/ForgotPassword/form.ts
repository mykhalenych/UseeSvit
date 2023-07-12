import {object, string} from 'yup';
import '../../../common/yupLocale';

export const defaultValues = {
    email: '',
};

export const validation = object().shape({
    email: string().email().required(),
});
