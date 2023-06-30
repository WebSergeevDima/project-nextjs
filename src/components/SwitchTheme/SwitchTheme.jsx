import React, {useContext} from 'react';
import style from './SwitchTheme.module.css'
import Image from "next/image";
import {ThemeContext} from "@/context/ThemeContext";

const SwitchTheme = () => {

    const {theme, switchTheme} = useContext(ThemeContext);

    return (
        <div className={theme === 'dark' ? style.dark : style.light}>
            <div className={`${style.button} ${style.r}`} onClick={switchTheme}>
                <div className={style.knobs}>
                    <div className={style.knobsLight}><Image width={20} height={20} src='/svg/sun.svg' alt="light"/></div>
                    <div className={style.knobsDark}><Image width={20} height={20} src='/svg/moon.svg' alt="dark"/></div>
                </div>
                <div className={style.layer}></div>
            </div>
        </div>
    );
};

export default SwitchTheme;