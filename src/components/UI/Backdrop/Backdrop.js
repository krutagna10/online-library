import React from "react";
import ReactDom from "react-dom";
import "./Backdrop.css";

const Backdrop = ({ className }) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <div className={`backdrop ${className}`}></div>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Backdrop;
