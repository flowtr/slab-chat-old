import { Router, Route } from "wouter";
import { useEffect, useState } from "preact/hooks";
import { Login } from "./components/Login";
import { useLocalStorage } from "./lib/storage";
import { Dashboard } from "./components/Dashboard";
import { socket } from "./lib/api";

export const App = () => {
  const [id, setId] = useLocalStorage<string | null>("id", () => null);

  socket.on("userInfo", ({ id }: { id: string }) => {
    setId(id);
  });

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
