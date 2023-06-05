import { useState } from "react";
const FormInput = (props) => {
  const [focus, setIsFocus] = useState(false);
  const inputFocusHandler = () => {
    setIsFocus(true);
    if (props.onFocus) {
      props.onFocus();
    }
  };
  const inputBlurHandler = () => {
    setIsFocus(false);
    props.onBlur();
  };
  const bg = focus ? "bg-white" : "bg-xfadeBlue";
  return (
    <input
      {...props.input}
      onChange={props.onChange}
      className={` text-sm md:text-base w-full md:py-2 px-2 py-1 md:px-3 border md:border-2 rounded-md xl:rounded-lg  outline-none ${
        props.hasError
          ? "border-red-300 bg-red-50"
          : `border-fadeBlue ${props.bg ? "" : bg}`
      } ${props.className ? props.className : ""}`}
      onBlur={inputBlurHandler}
      onFocus={inputFocusHandler}
      onClick={props.onClick}
    />
  );
};
export default FormInput;
