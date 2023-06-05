import { useEffect } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { formDataAction } from "../../store/formData-slice";

const ReportComponent = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(
        formDataAction.setAllExpenseData({ id: "access", value: token })
      );
    }
  }, [dispatch]);
  return (
    <div className="bg-grad py-10">
      <Card className="flex flex-col  items-center">
        <h1 className="text-deepBlue text-2xl md:text-3xl font-bold text-center">
          Create Project Report with{" "}
          <span className="text-darkBlue"> Onesetu</span> <span>❤️</span>
        </h1>
        <div className="flex items-end xl:items-center mt-12 mb-28">
          <ProgressBar progress={props.progress} />
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
                className="w-32 text-sm md:text-lg md:w-44 py-2 bg-darkBlue text-white "
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
