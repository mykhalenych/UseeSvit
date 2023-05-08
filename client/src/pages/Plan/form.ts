import {object, string} from 'yup';

export const defaultValues = {
    from: '',
};

export const validation = object().shape({
    from: string().required(),
});
