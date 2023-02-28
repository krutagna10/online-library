import React from "react";
import ReactDom from "react-dom";
import "./Backdrop.css";

const Backdrop = ({ className, onClick }) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <div className={`backdrop ${className}`} onClick={onClick} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Backdrop;
