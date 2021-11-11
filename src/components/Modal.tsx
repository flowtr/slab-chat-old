import { ComponentChild, ComponentChildren } from "preact";
import { Overlay } from "./Overlay";

export const Modal = ({
  children,
  header,
  closeButton,
  isOpen,
  setIsOpen
}: {
  children: ComponentChildren;
  header: ComponentChild;
  closeButton?: boolean;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) => (
  <Overlay open={isOpen}>
    <div className="bg-gray-800 text-white max-w-md flex-grow py-4 px-4 rounded-lg shadow-xl">
      <h3 className="flex justify-between items-center mb-2 text-xl font-semibold">
        {header}
      </h3>
      <div>{children}</div>
      <div className="mt-3 flex justify-end space-x-3">
        {closeButton && (
          <button
            className={"px-3 py-1 bg-red-600 rounded-lg hover:bg-red-300"}
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        )}
      </div>
    </div>
  </Overlay>
);
