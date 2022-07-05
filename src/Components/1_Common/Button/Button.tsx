import styles from './Button.module.css';

import React from 'react';


type ButtonPropsType =  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    active?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({active, ...props}) => {
    const fClass = active ? styles.btn + ' ' + styles.active : styles.btn
    return (
        <button className={fClass} {...props} />
    );
};
