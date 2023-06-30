import React from 'react';
import Link from "next/link";
import style from './Button.module.css';

const Button = ({text, url}) => {
    return (
        <Link className={style.button} href={url}>{text}</Link>
    );
};

export default Button;