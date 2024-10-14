
import { getStyles } from '@/shared/lib/getStyles';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    size?: 'xxs' | 'xs' | 's';
    radius?: 'rounded' | 'circle';
    color?: 'primary' | 'secondary' | 'outlined'
    outlined?: boolean;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        size = 'xs',
        radius = 'rounded',
        color = 'primary',
        outlined,
        ...otherProps
    } = props;

    const mode = {
        [styles.outlined]: outlined,
    };

    const additional = [
        className,
        styles[size],
        styles[radius],
        styles[color],
    ];

    return (
        <button 
            className={getStyles(styles.button, mode, additional)}
            {...otherProps}
        >
            {children}
        </button>
    );
};