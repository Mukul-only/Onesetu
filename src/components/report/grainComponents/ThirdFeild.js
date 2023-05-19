import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formfeildSliceAction } from "../../../store/formfeild-slice";

export const RadioInput = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`flex flex-col justify-center text-sm md:text-base border text-center md:text-left   rounded-lg cursor-pointer px-3 md:px-6 py-2 ${
        props.value
          ? "bg-cyanY text-white"
          : "bg-white text-black hover:bg-cyan-500 hover:text-white"
      } duration-200 ease-in-out`}
    >
      <h2 className="font-semibold ">{props.label}</h2>
      <p className="hidden md:block text-sm">{props.desc}</p>
    </div>
  );
};

const ThirdFeild = (props) => {
  const dispatch = useDispatch();
  const [mudra, setMudra] = useState(false);
  const [pmgep, setPmgep] = useState(false);
  const [msme, setMsme] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const isValid = mudra || pmgep || msme;
  const hasError = isTouched && !isValid;

  const allFeildIsTouched = useSelector(
    (state) => state.formfeild.allFeildIsTouched
  );

  const mudraClickHandler = () => {
    setMudra(true);
    setPmgep(false);
    setMsme(false);
  };
  const pmgepClickHandler = () => {
    setMudra(false);
    setPmgep(true);
    setMsme(false);
  };
  const msmeClickHandler = () => {
    setMudra(false);
    setPmgep(false);
    setMsme(true);
  };

  useEffect(() => {
    dispatch(formfeildSliceAction.setIsFormValid({ id: 2, isValid: isValid }));
    if (!isValid) {
      dispatch(formfeildSliceAction.setIndex({ id: 1, set: 2 }));
    }
  }, [dispatch, isValid]);
  // this only mounts of intialzes the touched state of this component
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsTouched({
        id: 2,
        isTouched: false,
      })
    );
  }, [dispatch]);
  const item = allFeildIsTouched.find((item) => item.id === 2);
  let touched = false;
  if (item) {
    touched = item.isTouched;
  }
  useEffect(() => {
    setIsTouched(touched);
  }, [touched, setIsTouched]);
  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
        What type of loan do you need?
      </h1>
      <p className="text-xs md:text-sm">
        click the most applicable one to select.
      </p>

      <div className="flex space-x-8 mt-4">
        <RadioInput onClick={mudraClickHandler} value={mudra} label="Mudra" />
        <RadioInput onClick={pmgepClickHandler} value={pmgep} label="PMGEP" />
        <RadioInput
          onClick={msmeClickHandler}
          value={msme}
          label="Normal MSME loan"
        />
      </div>
      {msme && (
        <>
          <input
            type="text"
            placeholder="Loan schme"
            className="w-full text-sm md:text-base p-2 mt-8 rounded-lg border-2 border-fadeBlue outline-none bg-xfadeBlue "
          />
          <p className="text-xs md:text-sm mt-2">
            Leave blank if you are not sure about the bank scheme.
          </p>
        </>
      )}
      {hasError && <p className="px-2 text-red-500">input is in valid</p>}
    </>
  );
};
export default ThirdFeild;
