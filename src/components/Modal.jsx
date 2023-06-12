import React from "react";
import ReactPortal from "./ReactPortal";

const Modal = ({ children, isOpen, handleClose, modalHeight, modalWidth }) => {
  React.useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  console.log(`w-[${modalWidth}]` + " " +  `h-[${modalHeight}]`)

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div className={"custom-modal"} >
        {/* <button onClick={handleClose} className="close-btn">
          Close
        </button> */}
        <div className={"custom-modal-content"}>{children}</div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
