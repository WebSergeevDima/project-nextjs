"use client";

import {createContext, useEffect, useLayoutEffect, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    useLayoutEffect(() => {

        if (localStorage.getItem('theme')) {

            setTheme(localStorage.getItem('theme'));

        }

    }, []);

    const switchTheme = () => {

        const changeThemeTo = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', changeThemeTo);

        return setTheme(prev => changeThemeTo);
    }

    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            <body className={`theme ${theme}`}>{children}</body>
        </ThemeContext.Provider>
    );
}