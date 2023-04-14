import {object, string} from 'yup';

export const defaultValues = {
    name: '',
    password: '',
};

export const validation = object().shape({
    name: string().required(),
    password: string().required(),
});
