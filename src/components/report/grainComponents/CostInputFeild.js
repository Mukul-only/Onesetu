import FormInput from "../../../UI/FormInput";
import tickwhite from "../../../assets/tickwhite.svg";
import tickgray from "../../../assets/tickgray.svg";
import useInput from "../../hooks/use-input";
import { useEffect, useState } from "react";
const CostInputFeild = (props) => {
  const {
    value: input,
    isValid,
    setIsTouched,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput((input) => input.trim().length !== 0);
  const [clicked, setClicked] = useState(false);
  const labelClickHandler = () => {
    setClicked(true);
    if (clicked) {
      setIsTouched(false);
    }
  };
  useEffect(() => {
    const identifier = setTimeout(() => {
      props.onChange(input);
    }, 700);
    return () => {
      clearTimeout(identifier);
    };
  }, [input]);
  const highlight = !hasError && clicked;
  return (
    <div className="flex space-x-2 mt-8">
      <label
        htmlFor={props.id}
        className={`flex justify-start pl-2 pr-1 items-center min-w-[140px] md:min-w-[12rem] rounded-lg border-2 space-x-2 cursor-pointer ${
          highlight
            ? "border-darkBlue bg-darkBlue text-white"
            : "border-fadeBlue bg-xfadeBlue text-black"
        }`}
        onClick={labelClickHandler}
      >
        <img src={highlight ? tickwhite : tickgray} className="w-5 " />

        <p className="text-sm md:text-base">{props.id}</p>
      </label>
      <FormInput
        input={{
          type: "number",
          placeholder: "Estimated cost?",
          min: 1,
          id: props.id,
          value: input,
        }}
        className={`${highlight ? "bg-white" : "bg-xfadeBlue"}`}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        onClick={labelClickHandler}
        bg
      />
    </div>
  );
};
export default CostInputFeild;
