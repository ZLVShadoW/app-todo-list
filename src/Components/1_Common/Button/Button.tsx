import React from 'react';


type ButtonPropsType =  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: React.FC<ButtonPropsType> = ({...props}) => {
    return (
        <button {...props} />
    );
};
