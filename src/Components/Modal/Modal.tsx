import React from "react";
import "./MD.css";

const Modal = (props: any) => {
    return (
      <div className={`modal ${props.show ? "active" : ""}`}>
        <div className="modal__content modal__addTuition">{props.children}</div>
      </div>
    );
  };
  
  export default Modal;
  
  export const ModalHeader = (props: any) => {
    return <div className="modal__header">{props.children}</div>;
  };
  
  export const ModalBody = (props: any) => {
    return <div className="modal__body">{props.children}</div>;
  };
  
  export const ModalFooter = (props: any) => {
    return <div className="modal__footer">{props.children}</div>;
  };