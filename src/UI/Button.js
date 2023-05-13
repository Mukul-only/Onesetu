import React from "react";
const Button = (props) => {
  return (
    <button
      className={`rounded-lg border border-darkBlue shadow-btn ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
