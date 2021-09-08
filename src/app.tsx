import { Router, Route } from "wouter";
import { useEffect, useState } from "preact/hooks";
import { Login } from "./components/Login";
import { useLocalStorage } from "./lib/storage";
import { nanoid } from "nanoid";
import { Dashboard } from "./components/Dashboard";

export const App = () => {
    const [id, setId] = useLocalStorage("id", () => nanoid(36));

    return (
        <Router>
            <div className="flex justify-start items-center min-h-screen w-full">
                {id ? (
                    <Dashboard id={id} />
                ) : (
                    <Route path="/">
                        <Login onSubmit={({ id }) => setId(id)} />
                    </Route>
                )}
            </div>
        </Router>
    );
};
