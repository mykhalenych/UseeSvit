import {setLocale} from 'yup';
import type {TFunction} from 'i18next';

export function buildYupLocale(_: unknown, t: TFunction<[any]>) {
    setLocale({
        mixed: {
            required: t('validationMessages:fieldRequired', 'Field is required'),
        },
        number: {
            min: ({min}) =>
                t('minValue', {
                    ns: 'validationMessages',
                    number: min,
                    defaultValue: `Min value is ${min}`,
                }),
            max: ({max}) =>
                t('minValue', {
                    ns: 'validationMessages',
                    number: max,
                    defaultValue: `Max value is ${max}`,
                }),
        },
        array: {
            min: ({min}) =>
                t('minArrayValue', {
                    ns: 'validationMessages',
                    number: min,
                    defaultValue: `Field must have at least ${min} item`,
                }),
        },
        date: {
            min: ({min}) =>
                t('minDateValue', {
                    ns: 'validationMessages',
                    number: min,
                    defaultValue: `Field must be later than ${min}`,
                }),
        },
    });
}
