import { Router, Route, Redirect } from "wouter-preact";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { FC } from "preact/compat";
import { ToastContainer } from "react-toastify";
import { observer } from "mobx-react-lite";
import type { tokenStore } from "@/stores/tokenStore";
import { Dashboard } from "@/components/Dashboard";
import { Login } from "@/pages/Login";

const queryClient = new QueryClient();

export const App: FC<{ tokens: typeof tokenStore }> = observer(
  ({ tokens }: { tokens: typeof tokenStore }) => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ToastContainer />
        <Route path="/">
          {tokens.token ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
);
