'use client';

import React from 'react';
import Link from "next/link";
import style from './Header.module.css'
import SwitchTheme from "@/components/SwitchTheme/SwitchTheme";

const links = [
    {id: 0, title: 'Главная', url: '/'},
    {id: 1, title: 'Портфолио', url: '/portfolio'},
    {id: 2, title: 'Обо мне', url: '/about'},
    {id: 3, title: 'Блог', url: '/blog'},
    {id: 4, title: 'Контакты', url: '/contact'},
    {id: 5, title: 'Панель индикаторов', url: '/dashboard'}
];

const Header = () => {

    const logoutHandler = () => {
        console.log('Is LogOut');
    }

    return (
        <div className={`themeNavbar ${style.headerWrapper}`} >
        <header className={'container'}>
            <div className={`${style.header}`}>
                <div>
                    <nav className={style.header__nav}>
                        <SwitchTheme/>
                        {links.map(link => {
                            return <Link key={link.id} href={link.url} className={style.header__navLink}>{link.title}</Link>
                        })}
                    </nav>
                </div>
            <div><button onClick={logoutHandler} className={style.header__btnLogout}>Logout</button></div>
            </div>
        </header>
    </div>
    );
};

export default Header;