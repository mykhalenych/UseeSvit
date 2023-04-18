import {object, string} from 'yup';

export const defaultValues = {
    name: '',
    email: '',
};

export const validation = object().shape({
    name: string().required(),
    email: string().email().required(),
});
