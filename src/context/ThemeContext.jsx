import { useEffect, useState } from "react";
import { createContext } from "react";
export const GlobalThemeContext=createContext()
export const ThemeProvider=({children})=>{
    const [darkMode,setDarkMode]=useState(localStorage.getItem('DarkMode')?JSON.parse(localStorage.getItem('DarkMode')):false)
    const toggleTheme=()=>{
        setDarkMode(!darkMode)
    }
    useEffect(()=>{
        localStorage.setItem('DarkMode',darkMode)
    },[darkMode])
    return(
        <GlobalThemeContext.Provider value={{darkMode,setDarkMode,toggleTheme}}>
            {children}
        </GlobalThemeContext.Provider>
    )
}