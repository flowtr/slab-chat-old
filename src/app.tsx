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
      {id ? (
        <Dashboard id={id} />
      ) : (
        <Route path="/">
          <Login onSubmit={({ id }) => setId(id)} />
        </Route>
      )}
    </Router>
  );
};
