import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import ReportComponent from "../../components/report/ReportComponent";
import ReportsFeilds from "../../components/report/ReportsFeilds";
import { useSelector, useDispatch } from "react-redux";
import { formfeildSliceAction } from "../../store/formfeild-slice";
import { formDataAction } from "../../store/formData-slice";
import { useEffect, useState } from "react";

const BusinessInfoPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFormValid = useSelector((state) => state.formfeild.isFormValid);
  const index = useSelector((state) => state.formfeild.index);
  const formData = useSelector((state) => state.formdata);
  const { needFor } = useSelector((state) => state.formfeild);
  const overlay = document.getElementById("overlays");

  useEffect(() => {
    dispatch(formfeildSliceAction.setIndex({ id: 1, set: 0 }));
  }, []);
  useEffect(() => {
    if (index < 4 || needFor === "working") {
      dispatch(formDataAction.reset(4));
    } else {
      dispatch(formDataAction.setMounted({ id: 4, isMounted: true }));
    }
    if (index < 6) {
      dispatch(formDataAction.reset(6));
    } else {
      dispatch(formDataAction.setMounted({ id: 6, isMounted: true }));
    }
  }, [dispatch, index, needFor]);

  const showNextFeildHandler = () => {
    for (let i = 0; i <= index; i++) {
      dispatch(formfeildSliceAction.setIsTouched({ id: i, isTouched: true }));
    }

    if (
      index < 6 &&
      isFormValid &&
      (formData.mounted.allExpenseNeededMounted
        ? formData.isDataValid.allExpenseNeededValid
        : true)
    ) {
      dispatch(formfeildSliceAction.setIndex({ id: 0 }));
    } else if (isFormValid && formData.isFormDataValid) {
      navigate("personalinfo");
    }
  };

  return (
    <ReportComponent progress="0">
      <ReportsFeilds />
      <div>
        <Button
          className="w-44 py-3  mt-10 font-semibold bg-darkBlue hover:bg-opacity-90 duration-300 text-white"
          onClick={showNextFeildHandler}
        >
          Save & Continue
        </Button>
      </div>
    </ReportComponent>
  );
};
export default BusinessInfoPage;
