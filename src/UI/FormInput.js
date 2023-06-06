import { useEffect, useRef, useState } from "react";
import Eye from "../assets/eye-solid";
import EyeSlash from "../assets/eye-slash-solid";
const FormInput = (props) => {
  const inputRef = useRef();

  const [focus, setIsFocus] = useState(false);

  const [visible, setVisible] = useState(false);
  const pwd = props.input.type === "password";
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
  const visiblityHandler = () => {
    setVisible((prev) => {
      inputRef.current.type = !prev ? "text" : "password";
      return !prev;
    });
    inputRef.current.focus();
  };

  if (pwd) {
    return (
      <div
        className={`flex text-sm md:text-base w-full  border md:border-2 rounded-md xl:rounded-lg overflow-hidden  ${
          props.hasError
            ? "border-red-300 bg-red-50"
            : `border-fadeBlue ${props.bg ? "" : bg}`
        } ${props.className ? props.className : ""}`}
      >
        <input
          ref={inputRef}
          {...props.input}
          onChange={props.onChange}
          className={`md:py-2 px-2 py-1 md:px-3 outline-none flex-1 w-0 bg-transparent ${
            props.hasError ? " bg-red-50" : ""
          }`}
          onBlur={inputBlurHandler}
          onFocus={inputFocusHandler}
          onClick={props.onClick}
        />

        <span
          className="relative flex w-12 justify-center items-center cursor-pointer"
          onClick={visiblityHandler}
        >
          {visible ? (
            <EyeSlash className="w-4 lg:w-6 fill-Blue-500" />
          ) : (
            <Eye className="w-4 lg:w-6 fill-Blue-500" />
          )}
        </span>
      </div>
    );
  } else {
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
  }
};
export default FormInput;
