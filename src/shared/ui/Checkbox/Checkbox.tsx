import { CheckmarkIcon } from '@/shared/assets/icons/checkmarkIcon';
import styles from './Checkbox.module.scss';
import { ChangeEvent, ReactNode } from 'react';

interface CheckboxProps {
    checked: boolean;
    name: string;
    children: ReactNode;
    onChange: (name: string, checked: boolean) => void;
}

export const Checkbox = (props: CheckboxProps) => {
    const { checked, name, onChange, children } = props;

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        onChange(name, checked);
    };

    return (
        <label className={styles.label} htmlFor={name}>
            <div className={styles.checkbox}>
                <input
                    type="checkbox"
                    name={name}
                    id={name}
                    className={styles.hiddenCheckbox}
                    checked={checked}
                    onChange={handleCheckboxChange}
                />
                <span className={styles.customCheckbox}>
                    <CheckmarkIcon />
                </span>
            </div>
            <span className={styles.text}>{children} </span>
        </label>
    );
};
