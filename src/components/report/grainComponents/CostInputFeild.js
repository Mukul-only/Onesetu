import FormInput from "../../../UI/FormInput";
import tickwhite from "../../../assets/tickwhite.svg";
import tickgray from "../../../assets/tickgray.svg";
import useInput from "../../hooks/use-input";
import { useEffect } from "react";
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
  useEffect(() => {
    const identifier = setTimeout(() => {
      props.onChange(input);
    }, 700);
    return () => {
      clearTimeout(identifier);
    };
  }, [input]);
  return (
    <div className="flex space-x-2 mt-8">
      <label
        htmlFor={props.id}
        className={`flex justify-start pl-2 items-center min-w-[140px] md:min-w-[12rem] rounded-lg border-2 space-x-2 cursor-pointer ${
          isValid
            ? "border-darkBlue bg-darkBlue text-white"
            : "border-fadeBlue bg-xfadeBlue text-black"
        }`}
      >
        <img src={isValid ? tickwhite : tickgray} className="w-5 " />

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
        onChange={inputChangeHandler}
      />
    </div>
  );
};
export default CostInputFeild;
