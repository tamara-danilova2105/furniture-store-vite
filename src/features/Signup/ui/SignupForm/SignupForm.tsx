import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '@/shared/assets/icons/navbarIcons';
import { getRouteMain, getRouteSignin } from '@/app/router/lib/helper';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { CheckmarkIcon } from '@/shared/assets/icons/checkmarkIcon';
import { Button } from '@/shared/ui/Button';
import { HidePasswordIcon, ShowPasswordIcon } from '@/shared/assets/icons/passwordIcons';
import styles from './SignupForm.module.scss';

export const SignupForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form 
            className={styles.form} 
            onSubmit={handleSubmit}
        >
            <Link className={styles.logo} to={getRouteMain()}>
                <LogoIcon />
            </Link>

            <Stack direction="column" gap="32">
                <Text type="h2" size="xl" className={styles.heading}>
                    Регистрация
                </Text>

                <Stack gap='16' className={styles.name}>
                    <Input
                        label="Имя"
                        type="text"
                        placeholder="Введите имя"
                        name='firstname'
                        className={styles.firstname}
                    />
                    <Input
                        label="Фамилия"
                        type="text"
                        placeholder="Введите фамилию"
                        name='lastname'
                    />
                </Stack>

                <Input
                    label="Электронная почта"
                    type="email"
                    placeholder="Введите адрес электронной почты"
                    className={styles.email}
                    name='email'
                />

                <Stack direction='column' className={styles.password} max>
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

                <Stack justify='between' align="center">
                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            className={styles.hiddenCheckbox}
                        />
                        <span className={styles.customCheckbox}>
                            <CheckmarkIcon />
                        </span> Согласен с
                        {/* TODO */}
                        <Link to='/' className={styles.linkAgree}> Условиями </Link> и 
                        <Link to='/' className={styles.linkAgree}> Политикой Конфиденциальности </Link>
                    </label>
                </Stack>

                <Button 
                    type="submit" 
                    className={styles.signUpBtn}
                >
                    Зарегистрироваться
                </Button>

                <Text className={styles.account}>
                    Уже есть аккаунт? <Link to={getRouteSignin()} className={styles.signInLink}>Войти</Link>
                </Text>
            </Stack>
        </form>
    );
};
