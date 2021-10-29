import { Sidebar } from "./Sidebar";
import { Conversations } from "./Conversations";
import { Friends } from "./Friends";
import { Route, Router } from "wouter";
import { FunctionComponent } from "preact";

export const Dashboard: FunctionComponent<{ id: string }> = ({ id }) => (
  <div className="w-full h-full">
    <Sidebar />
    <div className="flex flex-col min-h-screen min-w-max ml-16 text-white bg-gray-800">
      <div className="nav-content overflow-auto flex-grow px-16 py-16">
        <Route path="/conversations">
          <Conversations />
        </Route>
        <Route path="/friends">
          <Friends />
        </Route>
      </div>
      <div className="p-2 text-sm px-16 py-8">
        Your Id: <span className="text-gray-400">{id}</span>
      </div>
    </div>
  </div>
);
