import { useEffect, useState } from "preact/hooks";

export const createLocalStorage = (prefix: string) => {
    return {
        useLocalStorage: <T>(key: string, initialValue: () => T) => {
            const prefixedKey = prefix + key;
            const [value, setValue] = useState(() => {
                const jsonValue = localStorage.getItem(prefixedKey);
                if (jsonValue != null) return JSON.parse(jsonValue);
                return initialValue();
            });

            useEffect(() => {
                localStorage.setItem(prefixedKey, JSON.stringify(value));
            }, [prefixedKey, value]);

            return [value, setValue];
        },
    };
};

export const { useLocalStorage } = createLocalStorage("slabchat-");
