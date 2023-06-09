import useInput from "../../hooks/use-input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formfeildSliceAction } from "../../../store/formfeild-slice";

import FormInput from "../../../UI/FormInput";
import { formDataAction } from "../../../store/formData-slice";
const FirstFeild = (props) => {
  const allFeildIsTouched = useSelector(
    (state) => state.formfeild.allFeildIsTouched
  );
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
  } = useInput((input) => input.trim().length !== 0);
  const preValue = useSelector(
    (state) => state.formdata.allExpensedata["Name of firm"]
  );
  // this only mounts of intialzes the touched state of this component
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsTouched({
        id: 0,
        isTouched: false,
      })
    );
    if (preValue) {
      setInput(preValue);
    }
  }, [dispatch]);
  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(
        formDataAction.setAllExpenseData({ id: "Name of firm", value: input })
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [input]);
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsFormValid({
        id: 0,
        isValid: isValid,
      })
    );
  }, [dispatch, isValid]);

  const item = allFeildIsTouched.find((item) => item.id === 0);
  let touched = false;
  if (item) {
    touched = item.isTouched;
  }
  useEffect(() => {
    setIsTouched(touched);
  }, [touched]);
  useEffect(() => {
    if (!isValid) {
      dispatch(formfeildSliceAction.setIndex(0));
    }
  }, [isValid]);

  return (
    <>
      <h1 className="report-label">What’s the name of your firm?</h1>
      <p className="text-xs md:text-sm">Enter the whole legal name.</p>

      <FormInput
        input={{ type: "text", value: input, placeholder: "Company Name" }}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        hasError={hasError}
        className="mt-8"
        isValid={isValid}
      />
      {hasError && <p className="px-2 text-red-500">input is in valid</p>}
    </>
  );
};

export default FirstFeild;
