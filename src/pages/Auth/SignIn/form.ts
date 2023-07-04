import {object, string} from 'yup';

export const defaultValues = {
    email: '',
    password: '',
    name: '',
};

export const validation = object().shape({
    email: string().email().required(),
    password: string().required(),
    name: string().required(),
});
