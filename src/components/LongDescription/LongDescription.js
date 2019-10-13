import React from "react";
import LongCSS from "./LongDescription.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import AUX from "../../HOC/Auxiliary/Auxiliary";

const LongDescription = props => (
  <AUX>
    <Backdrop show={props.show} clickRem={props.clickRem} />
    <div
      className={LongCSS.LongDescription}
      style={{
        transform: props.show ? "translateY(-28vh)" : "translateY(100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </AUX>
);

export default LongDescription;
