import { Component } from "preact";
import { useLocation } from "wouter";

export interface NavKey {
    key: string;
    display: Component | string;
    url?: string;
}

export const Navigation = (props: {
    activeKey: NavKey;
    onSelect: (k: NavKey) => void;
    keys: NavKey[];
}) => {
    return (
        <nav>
            {props.keys.map(({ key, display, url }) => (
                <a
                    href={url ?? "#"}
                    alt={key}
                    key={key}
                    className={
                        key === props.activeKey.key
                            ? "text-blue-500"
                            : "text-black"
                    }
                    onClick={() => {
                        props.onSelect({ key, display, url });
                    }}
                >
                    {display}
                </a>
            ))}
        </nav>
    );
};
