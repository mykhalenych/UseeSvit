import {object, string} from 'yup';

export const defaultValues = {
    activity: '',
    location: '',
};

export const validation = object().shape({
    activity: string().required(),
    location: string().required(),
});
