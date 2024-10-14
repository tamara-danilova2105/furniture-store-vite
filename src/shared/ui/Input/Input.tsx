import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import styles from './Input.module.scss';
import { getStyles } from '@/shared/lib/getStyles';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    placeholder?: string;
    label?: string;
    error?: boolean;
    errorMessage?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputProps) => {
    const {
        value,
        onChange,
        className,
        label,
        error = false,
        errorMessage = '',
        ...otherProps
    } = props;

    const [defaultValue, setDefaultValue] = useState(value);

    const handlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setDefaultValue(e.target.value);
        onChange?.(e);           
    };

    const mode = {
        [styles.error]: error,
    };

    const additional = [
        className,
    ];

    const inputClasses = getStyles(styles.input, mode, additional);

    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                value={defaultValue}
                onChange={handlerInput}
                className={inputClasses}
                {...otherProps}
            />
            {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>
    );
};
