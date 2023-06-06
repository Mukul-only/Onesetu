import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataAction } from "../store/formData-slice";
import { formfeildSliceAction } from "../store/formfeild-slice";
const Textbox = ({ id, label, className, textarea }) => {
  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);
  const { allFeildIsTouched } = useSelector((state) => state.formfeild);

  const touchedIndex = allFeildIsTouched.find((item) => item.id === id);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = value.trim().length !== 0;
  const hasError = isTouched && !isValid;
  const dispatch = useDispatch();
  let touch = false;
  if (touchedIndex) touch = touchedIndex.isTouched;
  useEffect(() => {
    if (touchedIndex) {
      setIsTouched(touch);
    }
  }, [touch]);

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const inputBlurHandler = () => {
    setIsTouched(true);
    setFocus(false);
  };
  const preValue = useSelector(
    (state) => state.formdata.allExpensedata[id][label]
  );
  useEffect(() => {
    if (preValue) {
      setValue(preValue);
    }
  }, [setValue]);
  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatch(
        formDataAction.setAllExpenseData({ id: id, label: label, value: value })
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [value, dispatch]);

  const textFocusHandler = () => {
    setFocus(true);
  };
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
      <label htmlFor={label} className="font-semibold md:font-bold">
        {label}
      </label>
      <textarea
        id={label}
        className={`text-sm md:text-base w-full md:py-2 p-2 md:px-3 border-2 rounded-md xl:rounded-lg  outline-none h-32 ${
          hasError
            ? "border-red-300 bg-red-50"
            : `border-fadeBlue ${focus ? "bg-white" : "bg-xfadeBlue"}`
        } duration-300`}
        value={value}
        {...textarea}
        onChange={inputChangeHandler}
        onBlur={inputBlurHandler}
        onFocus={textFocusHandler}
      />
      {hasError && <p className="error ">This feild is required!</p>}
    </div>
  );
};
export default Textbox;
