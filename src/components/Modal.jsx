import React from "react";
import ReactPortal from "./ReactPortal";

const Modal = ({
  children,
  isOpen,
  handleClose,
  modalHeight,
  modalWidth,
  posLeft,
  posTop,
}) => {
  React.useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={"custom-modal"}>
        <div
          className={"custom-modal-content"}
          style={{
            height: modalHeight,
            width: modalWidth,
            left: posLeft,
            top: posTop,
          }}
        >
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
