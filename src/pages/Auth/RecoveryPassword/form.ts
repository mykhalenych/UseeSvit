import * as yup from 'yup';

export const defaultValues = {
    newPassword: '',
    passwordConfirmation: '',
};

export const validation = yup.object().shape({
    newPassword: yup.string().required('Required field').min(8, 'Password is too short - should be 8 chars minimum'),
    passwordConfirmation: yup
        .string()
        .required('Required field')
        .oneOf([yup.ref('newPassword')], 'The password does not match'),
});
