import { SidebarIcon } from "./SidebarIcon";
import { FaEnvelope, FaPlus } from "react-icons/fa";
import { Link } from "wouter";

export const Sidebar = () => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
    <SidebarIcon
      link="/conversations"
      icon={<FaEnvelope />}
      text="Conversations"
    />
    <hr className="border-gray-700 border w-8 mx-auto" />
    <SidebarIcon link="/server/join" icon={<FaPlus />} text="Join Server" />
  </div>
);
