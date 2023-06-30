import React from 'react';
import {BiCopyright} from "react-icons/bi";
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`container`}>
            <span className={style.copy}><BiCopyright className={style.copyIcon}/><span className={style.copyTitle}>nextjs</span></span>
        </footer>
    );
};

export default Footer;