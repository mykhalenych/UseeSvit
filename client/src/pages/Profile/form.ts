import {object, string} from 'yup';

export const defaultNameValue = {
    newName: '',
};

export const defaultPasswordValue = {
    password: '',
    newPassword: '',
    passwordConfirmation: '',
};

export const nameValidation = object().shape({
    newName: string().required(),
});

export const passwordValidation = object().shape({
    password: string().required(),
    newPassword: string().required(),
    passwordConfirmation: string()
        .required()
        .test('passwords-match', 'Passwords must match', function (value) {
            return value === this.parent.newPassword;
        }),
});
