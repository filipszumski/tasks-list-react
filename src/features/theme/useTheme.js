import { useState, useEffect } from "react";
import { darkTheme, basicTheme } from "./theme";

export const useTheme = () => {
    const getInitialTheme = () => {
        const themeFromLocalStorage = localStorage.getItem("theme");

        return themeFromLocalStorage
            ? JSON.parse(themeFromLocalStorage)
            : basicTheme
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme => theme === basicTheme ? darkTheme : basicTheme)
    };

    return [
        theme,
        toggleTheme,
    ];
}