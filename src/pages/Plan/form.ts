import {object, string} from 'yup';
import '../../common/yupLocale';

export const defaultValues = {
    search: '',
};

export const validation = object().shape({
    search: string().required(),
});
