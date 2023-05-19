import Button from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import ReportComponent from "../../components/report/ReportComponent";
import ReportsFeilds from "../../components/report/ReportsFeilds";
import { useSelector, useDispatch } from "react-redux";
import { formfeildSliceAction } from "../../store/formfeild-slice";
import { formDataAction } from "../../store/formData-slice";
import { useEffect } from "react";

const BusinessInfoPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFormValid = useSelector((state) => state.formfeild.isFormValid);
  const index = useSelector((state) => state.formfeild.index);
  const formData = useSelector((state) => state.formdata);
  const { needFor } = useSelector((state) => state.formfeild);
  useEffect(() => {
    if (index < 4 || needFor === "working") {
      dispatch(formDataAction.reset());
    } else {
      dispatch(formDataAction.setMounted(true));
    }
  }, [dispatch, index, needFor]);

  const showNextFeildHandler = () => {
    for (let i = 0; i <= index; i++) {
      dispatch(formfeildSliceAction.setIsTouched({ id: i, isTouched: true }));
    }

    if (
      index < 5 &&
      isFormValid &&
      (formData.mounted ? formData.isDataValid : true)
    ) {
      dispatch(formfeildSliceAction.setIndex({ id: 0 }));
    } else if (isFormValid && formData.isDataValid) {
      navigate("personalinfo");
    }
  };

  return (
    <ReportComponent progress="0" toContinue="personalinfo">
      <ReportsFeilds />
      <Button
        className="w-24 py-2 font-semibold"
        onClick={showNextFeildHandler}
      >
        next
      </Button>
    </ReportComponent>
  );
};
export default BusinessInfoPage;
