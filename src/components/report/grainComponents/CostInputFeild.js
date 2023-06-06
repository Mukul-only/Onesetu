import FormInput from "../../../UI/FormInput";
import tickwhite from "../../../assets/tickwhite.svg";
import tickgray from "../../../assets/tickgray.svg";
import useInput from "../../hooks/use-input";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const CostInputFeild = ({ hash, id, onChange }) => {
  const {
    value: input,
    isValid,
    setIsTouched,
    setInput,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput((input) => input.trim().length !== 0);
  let label = "";
  if (hash === 4) label = "allExpenseNeeded";
  else if (hash === 6) label = "monthlyExpense";
  const preValue = useSelector(
    (state) => state.formdata.allExpensedata[label][id]
  );
  useEffect(() => {
    if (preValue) {
      setInput(preValue);
    }
  }, [setInput]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      onChange(input);
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [input]);
  const [inFocus, setInFocus] = useState(false);
  const inputFocusHandler = () => {
    setInFocus(true);
  };
  const blurHandler = () => {
    setInFocus(false);
    inputBlurHandler();
  };
  const highlight = isValid || inFocus;
  return (
    <div className="flex space-x-2 mt-8">
      <label
        htmlFor={id}
        className={`flex justify-start pl-2 pr-1 items-center min-w-[140px] md:min-w-[12rem] rounded-lg border-2 space-x-2 cursor-pointer ${
          highlight
            ? "border-Blue-500 bg-Blue-500 text-white"
            : "border-fadeBlue bg-xfadeBlue text-black"
        }`}
      >
        <img src={highlight ? tickwhite : tickgray} className="w-5 " />

        <p className="text-sm md:text-base">{id}</p>
      </label>
      <FormInput
        input={{
          type: "number",
          placeholder: "Estimated cost?",
          min: 1,
          id: id,
          value: input,
        }}
        className={`${highlight ? "bg-white" : "bg-xfadeBlue"}`}
        onChange={inputChangeHandler}
        onBlur={blurHandler}
        onFocus={inputFocusHandler}
        bg
      />
    </div>
  );
};
export default CostInputFeild;
