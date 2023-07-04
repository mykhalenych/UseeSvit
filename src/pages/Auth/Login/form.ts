import {object, string} from 'yup';

export const defaultValues = {
    password: '',
    email: '',
};

export const validation = object().shape({
    password: string().required(),
    email: string().email().required(),
});
