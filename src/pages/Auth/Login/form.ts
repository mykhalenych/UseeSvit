import {object, string} from 'yup';

export const defaultValues = {
    name: '',
};

export const validation = object().shape({
    name: string().required(),
});
