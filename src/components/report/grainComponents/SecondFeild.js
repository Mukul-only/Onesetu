import useInput from "../../hooks/use-input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
import FormInput from "../../../UI/FormInput";
import { formDataAction } from "../../../store/formData-slice";
const SecondFeild = (props) => {
  const dispatch = useDispatch();
  const allFeildIsTouched = useSelector(
    (state) => state.formfeild.allFeildIsTouched
  );
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
    (state) => state.formdata.allExpensedata["Type of business"]
  );
  // this only mounts of intialzes the touched state of this component
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsTouched({
        id: 1,
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
        formDataAction.setAllExpenseData({
          id: "Type of business",
          value: input,
        })
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [input]);
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsFormValid({
        id: 1,
        isValid: isValid,
      })
    );
  }, [isValid, dispatch]);

  const item = allFeildIsTouched.find((item) => item.id === 1);
  let touched = false;
  if (item) {
    touched = item.isTouched;
  }
  useEffect(() => {
    setIsTouched(touched);
  }, [touched]);
  useEffect(() => {
    if (!isValid) {
      dispatch(formfeildSliceAction.setIndex(1));
    }
  }, [isValid]);

  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
        What’s type of business are you planning?
      </h1>
      <p className="text-xs md:text-sm">
        Eg. soap manufacturing, pickle manufacturing, dairy farm etc.
      </p>

      <FormInput
        input={{ type: "text", value: input, placeholder: "Eg. Design agency" }}
        onChange={inputChangeHandler}
        hasError={hasError}
        onBlur={inputBlurHandler}
        className="mt-8"
        isValid={isValid}
      />
      {hasError && <p className="px-2 text-red-500">input is in valid</p>}
    </>
  );
};
export default SecondFeild;
