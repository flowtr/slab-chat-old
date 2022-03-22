import { ComponentChild, ComponentChildren } from "preact";
import { Overlay } from "./Overlay";

export const Modal = ({
  children,
  header,
  closeButton,
  footer,
  isOpen,
  setIsOpen
}: {
  children: ComponentChildren;
  header: ComponentChild;
  footer: ComponentChild;
  closeButton?: boolean;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) => (
  <Overlay open={isOpen}>
    <div className="bg-gray-800 text-white max-w-lg flex-grow py-8 px-4 rounded-lg shadow-xl">
      <h3 className="flex justify-center items-center text-xl font-semibold mb-4">
        {header}
      </h3>
      <div>{children}</div>
      <div className="mt-4 flex justify-end space-x-3">
        {footer}
        {closeButton && (
          <button
            className={"px-4 py-2 bg-red-700 rounded-lg hover:bg-red-800"}
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        )}
      </div>
    </div>
  </Overlay>
);
