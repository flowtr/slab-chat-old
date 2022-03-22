import { ComponentChild, FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Link } from "wouter-preact";

export const SidebarIcon: FunctionComponent<{
  icon: ComponentChild;
  text?: ComponentChild;
  link: string;
}> = ({ icon, text = "tooltip 💡", link }) => {
  const [isHovering, setHovering] = useState(false);

  return (
    <Link href={link}>
      <div
        className="relative flex items-center justify-center
  h-12 w-12 mt-2 mb-2 mx-auto shadow-lg
  bg-gray-800 text-pink-500
  hover:bg-pink-600 hover:text-white
  rounded-3xl hover:rounded-xl
  transition-all duration-300
  ease-linear cursor-pointer"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {icon}

        {isHovering && (
          <span
            className="absolute w-auto p-2 m-2 min-w-max left-14
      rounded-md shadow-md
      text-white bg-gray-900
      text-xs font-bold
      transition-all duration-100 scale-0 origin-left"
          >
            {text}
          </span>
        )}
      </div>
    </Link>
  );
};
