import { useEffect } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formDataAction } from "../../store/formData-slice";
import { formfeildSliceAction } from "../../store/formfeild-slice";
const ReportComponent = (props) => {
  const dispatch = useDispatch();
  const { isFormValid } = useSelector((state) => state.formfeild);
  const { isFormDataValid } = useSelector((state) => state.formdata);
  const { mounted } = useSelector((state) => state.formdata);
  const [searchParams] = useSearchParams();
  const dataValidity =
    mounted.allExpenseNeededMounted || mounted.monthlyExpenseMounted
      ? isFormDataValid
      : true;
  const isEdit = searchParams.get("mode") === "edit";
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(
        formDataAction.setAllExpenseData({ id: "access", value: token })
      );
    }
  }, [dispatch]);
  const gotoHandler = (e) => {
    dispatch(formfeildSliceAction.setAllTouched());
    if (!(isFormValid && isEdit && dataValidity)) {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-lightBlue py-10">
      <Card className="flex flex-col  items-center">
        <h1 className="text-deepBlue text-2xl md:text-3xl font-bold text-center tracking-tight">
          Create Project Report with{" "}
          <span className="text-Blue-500"> Onesetu</span> <span>❤️</span>
        </h1>
        <div className="flex flex-col mt-12 mb-28 items-end space-y-2">
          <div className="flex items-end xl:items-center ">
            <ProgressBar progress={props.progress} />
          </div>
          {isEdit && (
            <Link
              to="/createreport/review"
              className="text-2xl lg:text-4xl text-Blue-500"
              onClick={gotoHandler}
            >
              {"->"}
            </Link>
          )}
        </div>

        <div className="flex flex-col items-center w-full space-y-4">
          {props.children}
        </div>
        <div className="space-x-6 mt-12">
          {props.toBack && (
            <Link to={props.toBack} relative="route">
              <Button
                className="w-32 md:w-44 py-2 bg-white text-sm md:text-lg"
                onClick={props.onBack}
              >
                Back
              </Button>
            </Link>
          )}
          {props.toContinue && (
            <Link to={props.toContinue}>
              <Button
                className="w-32 text-sm md:text-lg md:w-44 py-2 bg-Blue-500 text-white "
                onClick={props.onContinue}
              >
                Save & Continue
              </Button>
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
};
export default ReportComponent;
