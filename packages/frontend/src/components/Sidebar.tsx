import { SidebarIcon } from "./SidebarIcon";
import { faEnvelope, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sidebar = () => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
    <SidebarIcon
      link="/conversations"
      icon={<FontAwesomeIcon icon={faEnvelope} />}
      text="Conversations"
    />
    <hr className="border-gray-700 border w-8 mx-auto" />
    <SidebarIcon
      link="/server/join"
      icon={<FontAwesomeIcon icon={faPlus} />}
      text="Join Server"
    />
  </div>
);
