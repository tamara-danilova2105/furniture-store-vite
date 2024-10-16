import { Stack } from '@/shared/ui/Stack';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { getRouteMain, getRouteSignup } from '@/app/router/lib/helper';
import { HidePasswordIcon, ShowPasswordIcon } from '@/shared/assets/icons/passwordIcons';
import { LogoIcon } from '@/shared/assets/icons/navbarIcons';
import { CheckmarkIcon } from '@/shared/assets/icons/checkmarkIcon';
import styles from './SigninForm.module.scss';

export const SigninForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
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

                <Input
                    label="Электронная почта"
                    type="email"
                    placeholder="Введите адрес электронной почты"
                    name='email'
                />

                <Stack direction='column' className={styles.password}>
                    <Input
                        label="Пароль"
                        type={!showPassword ? 'password' : 'text'}
                        placeholder=" введите пароль"
                        name='password'
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
