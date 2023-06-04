import React from "react";
const Button = (props) => {
  return (
    <button
      className={`rounded-md border border-darkBlue shadow-btn  ${
        props.className
      } ${props.disabled ? "cursor-not-allowed" : ""}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
