import { useState, useEffect } from "react";

const useInput = (validateValue) => {
  const [input, setInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isInputValid = validateValue(input);
  const hasError = isTouched && !isInputValid;

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setInput("");
    setIsTouched(false);
  };
  return {
    value: input,
    isValid: isInputValid,
    setIsTouched,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
