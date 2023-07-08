import React from "react";

function Modal({ show, close, children }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center
      transition-all z-10 ${show ? "visible bg-black/20" : "invisible bg-white/0"}`}
      onClick={close}
    >
      <div
        className={`modal transition-all duration-300 transform ${
          show ? `opacity-100` : `opacity-0`
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
