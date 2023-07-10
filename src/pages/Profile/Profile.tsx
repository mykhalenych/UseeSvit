import {useForm, FormProvider} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Grid, Typography} from '@mui/material';

import {changeUserName, changeUserPassword} from '../../redux/auth/thunks';
import {selectUser} from '../../redux/auth/selectors';
import {useAppDispatch} from '../../redux/store';
import {nameValidation, defaultNameValue, defaultPasswordValue, passwordValidation} from './form';
import {authThunkNames} from '../../redux/auth/constants';
import {selectLoading} from '../../redux/selectors';
import Button from '../../components/common/Button';
import InputControl from '../../components/common/form/InputControl';

const Profile = () => {
    const dispatch = useAppDispatch();
    const {name, id} = useSelector(selectUser);
    const {t} = useTranslation();

    const methods = useForm({
        resolver: yupResolver(nameValidation.concat(passwordValidation)),
        defaultValues: {
            ...defaultNameValue,
            ...defaultPasswordValue,
        },
        mode: 'onChange',
    });

    const {formState, reset, watch} = methods;
    const [newName, password, passwordConfirmation, newPassword] = watch([
        'newName',
        'password',
        'passwordConfirmation',
        'newPassword',
    ]);
    const {errors} = formState;

    useEffect(() => {
        if (id) {
            reset({
                newName: name,
            });
        }
    }, [reset, id, name]);

    const isPasswordFilled = password && passwordConfirmation && newPassword;
    const isPasswordCorrect = !errors.password && !errors.passwordConfirmation && !errors.newPassword;

    const isLoading = useSelector(
        selectLoading(ISlicesNames.auth, [authThunkNames.changeName, authThunkNames.changePassword]),
    );

    const handleChangeName = () => {
        dispatch(changeUserName(newName));
    };

    const handleChangePassword = () => {
        dispatch(
            changeUserPassword({
                password,
                newPassword,
                passwordConfirmation,
            }),
        );
    };

    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Grid container spacing={2} px={2} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h2">{t('profileMenu.profile')}</Typography>
                </Grid>

                <Grid item xs={12}>
                    <FormProvider {...methods}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Grid item xs={8}>
                                        <InputControl
                                            control={methods.control}
                                            label={t('profile.newName')}
                                            name="newName"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Button
                                            isLoading={isLoading}
                                            variant="contained"
                                            color="primary"
                                            minWidth={190}
                                            disabled={!newName || !!errors.newName || name === newName}
                                            onClick={handleChangeName}>
                                            {t('profile.change')}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item xs={8}>
                                    <InputControl
                                        control={methods.control}
                                        label={t('profile.currentPassword')}
                                        type="password"
                                        name="password"
                                        fullWidth
                                    />
                                    <InputControl
                                        control={methods.control}
                                        label={t('profile.newPassword')}
                                        type="password"
                                        name="newPassword"
                                        fullWidth
                                    />
                                    <InputControl
                                        control={methods.control}
                                        label={t('profile.confirmPassword')}
                                        type="password"
                                        name="passwordConfirmation"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <Button
                                        isLoading={isLoading}
                                        variant="contained"
                                        color="primary"
                                        minWidth={190}
                                        disabled={!isPasswordCorrect || !isPasswordFilled}
                                        onClick={handleChangePassword}>
                                        {t('profile.change')}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </FormProvider>
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;
