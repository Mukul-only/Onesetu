import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formDataAction } from "../store/formData-slice";
import { formfeildSliceAction } from "../store/formfeild-slice";

const Radio = ({ id, label, className, options }) => {
  const [value, setValue] = useState("");
  const { allFeildIsTouched } = useSelector((state) => state.formfeild);
  const touchedIndex = allFeildIsTouched.find((item) => item.id === id);
  let isTouched = false;
  if (touchedIndex) {
    isTouched = touchedIndex.isTouched;
  }
  const isValid = value.trim() !== "";
  const hasError = isTouched && !isValid;
  const dispatch = useDispatch();

  // set prev value
  const preValue = useSelector(
    (state) => state.formdata.allExpensedata[id][label]
  );
  useEffect(() => {
    if (preValue) {
      setValue(preValue);
    }
  }, [setValue]);

  const changeHandler = (val) => {
    setValue(val);
  };
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
    <div className={`${className ? className : ""}`}>
      <label htmlFor={label} className="font-semibold md:font-bold">
        {label}
      </label>
      <div className="flex flex-wrap gap-3 md:gap-4 my-2 text-sm md:text-base">
        {options.map((item) => (
          <RadioInput
            key={item}
            title={item}
            name={label}
            onChange={() => changeHandler(item)}
            checked={item === value ? true : false}
          />
        ))}
      </div>
      {hasError && <p className="error ">This feild is required!</p>}
    </div>
  );
};
export default Radio;

const RadioInput = ({ title, name, onChange, checked }) => {
  return (
    <div className="space-x-1">
      <input
        id={title}
        type="radio"
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
};
