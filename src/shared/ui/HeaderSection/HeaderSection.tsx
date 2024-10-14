import { ReactNode } from 'react';
import styles from './HeaderSection.module.scss';

interface HeaderSectionProps {
    subTitle: string;
    title: string
    children: ReactNode;
};

export const HeaderSection = (props: HeaderSectionProps) => {

    const {
        subTitle,
        title,
        children, //FIX LATER
    } = props;

  return (
    <div className={styles.headerSection}>
          <div className={styles.wrapper}>
            <div className={styles.line}></div>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
        <h2 className={styles.title}>{title}<span>{children}</span></h2>
    </div>
  );
};