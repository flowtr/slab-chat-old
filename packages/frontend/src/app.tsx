import { Router, Route, Redirect } from "wouter";
import { Login } from "./pages/Login";
import { Dashboard } from "./components/Dashboard";
import { observer } from "mobx-react-lite";
import type { tokenStore } from "@/stores/tokenStore";
import { FC } from "preact/compat";
import { ToastContainer } from "react-toastify";

export const App: FC<{ tokens: typeof tokenStore }> = observer(
  ({ tokens }: { tokens: typeof tokenStore }) => (
    <Router>
      <ToastContainer />
      <Route path="/">
        <Redirect to="/login" />
      </Route>
      <Dashboard />
    </Router>
  )
);
