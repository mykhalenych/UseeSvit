import {object, string} from 'yup';

export const defaultValues = {
    email: '',
    password: '',
    name: '',
};

export const validation = object().shape({
    email: string().email().required(),
    password: string().required().min(8),
    name: string().required().min(3),
});
