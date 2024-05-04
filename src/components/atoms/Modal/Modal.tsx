import React from "react";
import ReactModal from "react-modal";
import { clsx } from "clsx";

const Modal: React.FC<ReactModal.Props & { closeModal?: () => void; title?: string }> = ({
  title,
  closeModal,
  children,
  ...props
}) => {
  return (
    <ReactModal
      {...props}
      className={clsx(
        "absolute top-[180px] left-1/2 w-[500px] -translate-x-1/2 rounded-[20px] bg-white py-6 outline-none",
        props.className
      )}
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-[rgb(0,0,0,0.5)]"
    >
      <div className="flex justify-between px-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>

        <button className="text-xl text-gray-500" onClick={closeModal}>
          X
        </button>
      </div>

      {children}
    </ReactModal>
  );
};

export default Modal;
