import React from "react";
import style from './page.module.css';

export const metadata = {
    title: 'Обо мне',
    description: 'Описание страницы обо мне',
}

const About = () => {
    return (
        <div className={style.about}>About</div>
    )
}

export default About;