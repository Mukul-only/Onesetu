import FormInput from "./FormInput";
import useInput from "../components/hooks/use-input";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataAction } from "../store/formData-slice";
import { formfeildSliceAction } from "../store/formfeild-slice";
import { userAction } from "../store/user-slice";
const Input = ({
  inputParams,
  id,
  label,
  className,
  bg,
  validation,
  errMsg,
  primaryLabel,
  login,
  signup,
  labelNone,
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
      if (primaryLabel) {
        if (signup) {
          dispatch(
            userAction.setSignup({
              label: primaryLabel,
              value: input,
            })
          );
        } else if (login) {
          dispatch(
            userAction.setLogin({
              label: primaryLabel,
              value: input,
            })
          );
        }
      } else {
        dispatch(
          formDataAction.setAllExpenseData({
            id: id,
            label: label,
            value: input,
          })
        );
      }
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [input]);

  // set prev value
  const authMethod = login ? "login" : signup ? "signup" : "";
  const preValue = useSelector((state) => {
    if (primaryLabel) {
      return state.user[authMethod][primaryLabel];
    } else {
      return state.formdata.allExpensedata[id][label];
    }
  });
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
    <div className={`${className ? className : ""} `}>
      {!labelNone && (
        <label
          htmlFor={label}
          className="text-sm md:text-base font-semibold xl:font-bold"
        >
          {label}
        </label>
      )}
      <FormInput
        input={{ ...inputParams, id: label, value: input }}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        bg={bg}
        hasError={hasError}
        className="mt-1"
      />
      {hasError && (
        <p className="error md:text-sm text-xs">
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
