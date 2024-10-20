import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from '@/shared/assets/icons/navbarIcons';
import { getRouteMain, getRouteSignin } from '@/app/router/lib/helper';
import { Stack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { HidePasswordIcon, ShowPasswordIcon } from '@/shared/assets/icons/passwordIcons';
import styles from './SignupForm.module.scss';
import { FormValues } from '../Signup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { data, emailRegex } from '@/shared/lib/validateInput';
import { Checkbox } from '@/shared/ui/Checkbox';

interface SignupFormProps {
    onSubmit: SubmitHandler<FormValues>
}

export const SignupForm = (props: SignupFormProps) => {
    const { onSubmit } = props;

    const [showPassword, setShowPassword] = useState(false);
    const [agreeWithTerms, setAgreeWithTerms] = useState(false); //TODO

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const PasswordToggleIcon = showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />;

    const handleCheckboxChange = (name: string, checked: boolean) => {
        console.log(name);
        setAgreeWithTerms(checked);
    }; //TODO

    return (
        <form 
            className={styles.form} 
            onSubmit={handleSubmit(onSubmit)}
        >
            <Link className={styles.logo} to={getRouteMain()}>
                <LogoIcon />
            </Link>

            <Stack direction="column" gap="32">
                <Text type="h2" size="xl">
                    Регистрация
                </Text>

                <Stack direction='column' gap='8'>
                    <Stack gap='16' className={styles.name}>
                        <Input
                            label="Имя"
                            type="text"
                            placeholder="Введите имя"
                            className={styles.firstname}
                            register={register("firstName", {required: data.required})} 
                            error={errors.firstName}
                        />
                        <Input
                            label="Фамилия"
                            type="text"
                            placeholder="Введите фамилию"
                            register={register("lastName", {required: data.required})} 
                            error={errors.lastName}
                        />
                    </Stack>

                    <Input
                        label="Электронная почта"
                        type="email"
                        placeholder="Введите адрес электронной почты"
                        className={styles.email}
                        register={register("email", {
                            required: data.required,
                            pattern: {
                                value: emailRegex,
                                message: data.errors.validEmail
                            }
                        })} 
                        error={errors.email}
                    />

                    <Stack direction='column' className={styles.password} max>
                        <Input
                            label="Пароль"
                            type={!showPassword ? 'password' : 'text'}
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

                    <Stack justify='between' align="center">
                        <Checkbox
                            checked={agreeWithTerms} 
                            name='agree' 
                            onChange={handleCheckboxChange} 
                        >
                            Согласен с 
                            {/* TODO */}
                            <Link to='/' className={styles.linkAgree}> Условиями </Link> и 
                            <Link to='/' className={styles.linkAgree}> Политикой Конфиденциальности </Link>
                        </Checkbox>
                    </Stack>
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
