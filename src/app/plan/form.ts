import {object, string} from 'yup';

export const defaultValues = {
    search: '',
};

export const validation = object().shape({
    search: string().required(),
});
