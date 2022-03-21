import { Sidebar } from "./Sidebar";
import { Conversations } from "./Conversations";
import { Friends } from "./Friends";
import { Route, Router } from "wouter";
import { FunctionComponent } from "preact";

export const Dashboard: FunctionComponent = () => (
  <div className="w-full h-full">
    <Sidebar />
    <div className="flex flex-col min-h-screen min-w-max ml-16 text-white bg-gray-800">
      <div className="nav-content overflow-auto flex-grow px-16 py-16">
        <Router>
          <Route path="/conversations">
            <Conversations />
          </Route>
          <Route path="/friends">
            <Friends />
          </Route>
        </Router>
      </div>
    </div>
  </div>
);
