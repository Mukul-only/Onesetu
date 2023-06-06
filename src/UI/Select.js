import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataAction } from "../store/formData-slice";
import { formfeildSliceAction } from "../store/formfeild-slice";

const Select = ({ id, label, className, options }) => {
  const [value, setValue] = useState("");
  const { allFeildIsTouched } = useSelector((state) => state.formfeild);
  const touchedIndex = allFeildIsTouched.find((item) => item.id === id);
  let isTouched = false;
  if (touchedIndex) {
    isTouched = touchedIndex.isTouched;
  }
  const isValid = value.trim().length !== 0;
  const hasError = isTouched && !isValid;
  const dispatch = useDispatch();
  const inputChangeHandler = (e) => {
    setValue(e.target.value);
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
    dispatch(
      formDataAction.setAllExpenseData({ id: id, label: label, value: value })
    );
  }, [value, dispatch]);
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsFormValid({ id: label, isValid: isValid })
    );
  }, [isValid]);
  return (
    <div className={`${className ? className : ""} space-y-2`}>
      <label htmlFor={label} className="font-semibold md:font-bold">
        {label}
      </label>
      <select
        name={label}
        id={label}
        value={value}
        onChange={inputChangeHandler}
        className={` text-sm md:text-base w-full md:py-2 p-2 md:px-3 border md:border-2 rounded-md xl:rounded-lg  outline-none ${
          hasError ? "border-red-300 bg-red-50" : `border-fadeBlue bg-xfadeBlue`
        } `}
      >
        <option value="">please select</option>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>

      {hasError && <p className="error ">This feild is required!</p>}
    </div>
  );
};
export default Select;
