import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
import { RadioInput } from "./ThirdFeild";
import { formDataAction } from "../../../store/formData-slice";
const FourthFeild = (props) => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState(false);
  const [working, setWorking] = useState(false);
  const [tw, setTw] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const isValid = term || working || tw;
  const hasError = isTouched && !isValid;

  const allFeildIsTouched = useSelector(
    (state) => state.formfeild.allFeildIsTouched
  );

  const termClickHandler = () => {
    setTerm(true);
    setWorking(false);
    setTw(false);
  };
  const workingClickHandler = () => {
    setTerm(false);
    setWorking(true);
    setTw(false);
  };
  const twClickHandler = () => {
    setTerm(false);
    setWorking(false);
    setTw(true);
  };

  let needFor = "";
  if (term) {
    needFor = "term";
  } else if (working) {
    needFor = "working";
  } else if (tw) {
    needFor = "tw";
  }

  useEffect(() => {
    let input = "";
    if (term) {
      input = "Term Loan";
    } else if (working) {
      input = "Working Capital Loan";
    } else if (tw) {
      input = "Term + Working Capital";
    }
    const identifier = setTimeout(() => {
      dispatch(
        formDataAction.setAllExpenseData({
          id: "Need for loan",
          value: input,
        })
      );
    }, 500);
    return () => {
      clearTimeout(identifier);
    };
  }, [term, working, tw]);

  useEffect(() => {
    dispatch(formfeildSliceAction.setIsFormValid({ id: 3, isValid: isValid }));
    if (!isValid) {
      dispatch(formfeildSliceAction.setIndex(3));
    }
    dispatch(formfeildSliceAction.setNeedFor(needFor));
  }, [isValid, dispatch, needFor]);

  const preValue = useSelector(
    (state) => state.formdata.allExpensedata["Need for loan"]
  );

  // this only mounts of intialzes the touched state of this component
  useEffect(() => {
    dispatch(
      formfeildSliceAction.setIsTouched({
        id: 3,
        isTouched: false,
      })
    );
    if (preValue) {
      if (preValue === "Term Loan") {
        setTerm(true);
      } else if (preValue === "Working Capital Loan") {
        setWorking(true);
      } else if (preValue === "Term + Working Capital") {
        setTw(true);
      }
    }
  }, [dispatch]);
  const item = allFeildIsTouched.find((item) => item.id === 3);
  let touched = false;
  if (item) {
    touched = item.isTouched;
  }
  useEffect(() => {
    setIsTouched(touched);
  }, [touched, setIsTouched]);

  return (
    <>
      <h1 className="report-label">Why do you need loan?</h1>
      <p className="text-xs md:text-sm">please select the purpose of loan.</p>
      <div className="flex gap-4 md:gap-4 xl:gap-8 mt-4 flex-wrap">
        <RadioInput
          onClick={termClickHandler}
          value={term}
          label="Term loan"
          desc="Eg. Buy Land, Machinery, Computer, Vehicle etc. for the business."
        />
        <RadioInput
          onClick={workingClickHandler}
          value={working}
          label="Working Capital loan"
          desc="Eg. Purchase stock, Manage daily/monthly  expenses. "
        />
        <RadioInput
          onClick={twClickHandler}
          value={tw}
          label="Term + Working Capital"
          desc="For all the above "
        />
      </div>
      {hasError && <p className="px-2 text-red-500">input is in valid</p>}
    </>
  );
};
export default FourthFeild;
