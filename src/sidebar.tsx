import { useState } from "preact/hooks";
import { Conversations } from "./components/Converstations";
import { Navigation, NavKey } from "./components/Nav";

export const keys: NavKey[] = [
    {
        key: "conversations",
        url: "/dashboard/conversations",
        display: "Conversations",
    },
    {
        key: "friends",
        url: "/dashboard/friends",
        display: "Friends",
    },
];

export const Sidebar = ({ id }: { id: string }) => {
    const [activeKey, setActiveKey] = useState<NavKey>(keys[0]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    return (
        <div className="w-48 h-screen flex flex-col flex-wrap justify-center items-center">
            <Navigation
                activeKey={activeKey}
                onSelect={setActiveKey}
                keys={[]}
            ></Navigation>

            <div className="nav-content overflow-auto flex-grow px-16 py-16">
                {activeKey.key === "conversations" && <Conversations />}
                {activeKey.key === "friends" && <Friends />}
            </div>
            <div className="p-2 text-sm px-16 py-8">
                Your Id: <span className="text-gray-400">{id}</span>
            </div>
        </div>
    );
};
