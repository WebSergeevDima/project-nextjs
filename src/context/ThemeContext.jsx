"use client";

import {createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        return setTheme(prev => theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{theme, switchTheme}}>
            <body className={`theme ${theme}`}>{children}</body>
        </ThemeContext.Provider>
    );
}