import { Stack } from '@/shared/ui/Stack';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { getRouteMain, getRouteSignup } from '@/app/router/lib/helper';
import { HidePasswordIcon, ShowPasswordIcon } from '@/shared/assets/icons/passwordIcons';
import { LogoIcon } from '@/shared/assets/icons/navbarIcons';
import { CheckmarkIcon } from '@/shared/assets/icons/checkmarkIcon';
import styles from './SigninForm.module.scss';
import { data, emailRegex } from '@/shared/lib/validateInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from '../Signin';

interface SigninFormProps {
    onSubmit: SubmitHandler<FormValues>
}

export const SigninForm = (props: SigninFormProps) => {
    const { onSubmit } = props;

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Link to={getRouteMain()}>
                <LogoIcon />
            </Link>
            <Stack direction="column" gap='32' align='start'>
                <Text type="h2" size="xl" className={styles.heading}>
                    Войти
                </Text>
                <Text className={styles.par}>
                    Заполните данные для доступа к вашему аккаунту.
                </Text>

                <Stack direction='column' gap='8' max>
                    <Input
                        label="Электронная почта"
                        type="email"
                        placeholder="Введите адрес электронной почты"
                        register={register("email", {
                            required: data.required,
                            pattern: {
                                value: emailRegex,
                                message: data.errors.validEmail
                            }
                        })} 
                        error={errors.email}
                    />

                    <Stack direction='column' className={styles.password}>
                        <Input
                            label='password' 
                            placeholder="Введите пароль"
                            register={register("password", {required: data.required})} 
                            error={errors.password}
                        />
                        <button 
                            className={styles.password_btn}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {PasswordToggleIcon}
                        </button>
                    </Stack>

                    <Stack justify='between' align="center" max>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                className={styles.hiddenCheckbox} 
                            />
                            <span className={styles.customCheckbox}>
                                <CheckmarkIcon />
                            </span> запомнить меня
                        </label>
                        {/* TODO */}
                        <Link to="/" className={styles.forgotPassword}>
                            Забыли пароль?
                        </Link>
                    </Stack>
                </Stack>

                <Button 
                    type="submit" 
                    className={styles.signInBtn}
                >
                    Войти
                </Button>

                <Text className={styles.account}>
                    Нет аккаунта? <Link to={getRouteSignup()} className={styles.signUpLink}>Зарегистрироваться</Link>
                </Text>
            </Stack>
        </form>
    );
};
