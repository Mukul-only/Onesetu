import FormInput from "./FormInput";
import useInput from "../components/hooks/use-input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataAction } from "../store/formData-slice";
import { formfeildSliceAction } from "../store/formfeild-slice";
const Input = ({
  inputParams,
  id,
  label,
  className,
  bg,
  validation,
  errMsg,
}) => {
  const dispatch = useDispatch();
  const {
    value: input,
    isValid,
    setIsTouched,
    setInput,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput((input) => validation(input));

  const { allFeildIsTouched } = useSelector((state) => state.formfeild);
  const touchedIndex = allFeildIsTouched.find((item) => item.id === id);
  let isTouched = false;
  if (touchedIndex) {
    isTouched = touchedIndex.isTouched;
  }
  useEffect(() => {
    setIsTouched(isTouched);
  }, [dispatch, isTouched]);
  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(
        formDataAction.setAllExpenseData({ id: id, label: label, value: input })
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [input]);

  // set prev value
  const preValue = useSelector(
    (state) => state.formdata.allExpensedata[id][label]
  );
  useEffect(() => {
    if (preValue) {
      setInput(preValue);
    }
  }, [setInput]);
  // set validity state
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsFormValid({
        id: label,
        isValid: isValid,
      })
    );
  }, [dispatch, isValid]);
  return (
    <div className={`${className ? className : ""} space-y-2`}>
      <label htmlFor={label} className="font-bold">
        {label}
      </label>
      <FormInput
        input={{ ...inputParams, id: label, value: input }}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        bg={bg}
        hasError={hasError}
      />
      {hasError && (
        <p className="error">
          {errMsg
            ? errMsg.trim() !== ""
              ? errMsg
              : "This feild is required!"
            : "This feild is required!"}
        </p>
      )}
    </div>
  );
};
export default Input;
