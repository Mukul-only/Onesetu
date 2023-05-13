import React from "react";
const Card = (props) => {
  return (
    <div className={`max-w-8xl mx-auto `}>
      <div className={`px-6 w-full ${props.className ? props.className : ""}`}>
        {props.children}
      </div>
    </div>
  );
};
export default Card;
