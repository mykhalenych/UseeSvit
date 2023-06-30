import {string} from 'yup';

export const validatePasswordConfirmation = (passwordFieldName: string) =>
    string()
        .required()
        .test('passwords-match', 'Passwords must match', function (value) {
            return value === this.parent[passwordFieldName];
        });
