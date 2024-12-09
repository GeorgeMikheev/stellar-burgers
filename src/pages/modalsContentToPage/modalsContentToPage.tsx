import { ReactNode } from 'react';
import styles from './modalsContentToPage.module.css';

export const ModalsContentToPage = ({
  children,
  title
}: {
  children: ReactNode;
  title: string;
}) => (
  <div className={styles.content}>
    <h3 className='text text_type_main-large'>{title}</h3>
    {children}
  </div>
);
