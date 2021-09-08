import { Sidebar } from "../sidebar";

export const Dashboard = (p: { id: string }) => {
    return (
        <div className="flex">
            <Sidebar id={p.id} />
        </div>
    );
};
