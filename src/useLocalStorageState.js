import { useState, useEffect } from "react";

export const useLocalStorageState = (keyName, initialValue) => {
    const getInitialState = () => {
        const stateFromLocalStorage = localStorage.getItem(keyName);

        return stateFromLocalStorage
            ? JSON.parse(stateFromLocalStorage)
            : initialValue
    };

    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [state]);

    return [state, setState];
};