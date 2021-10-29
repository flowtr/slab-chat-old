import { ComponentChildren } from "preact";

export const Overlay = ({
  children,
  open
}: {
  children: ComponentChildren;
  open?: boolean;
}) => (
  <div
    className={`bg-black absolute inset-0 bg-opacity-90 justify-center items-center ${
      open ? "flex " : "hidden"
    }`}
  >
    {children}
  </div>
);
