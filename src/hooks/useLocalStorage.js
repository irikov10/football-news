import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const serializedState = localStorage.getItem(key);

        if (serializedState) {
            const state = JSON.parse(serializedState);
            
            return state;
        }

        return initialValue;
    })

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }

    return [
        state,
        setLocalStorageState
    ]
}