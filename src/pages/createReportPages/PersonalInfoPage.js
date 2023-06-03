import { useDispatch, useSelector } from "react-redux";
import ReportCard from "../../components/report/ReportCard";
import ReportComponent from "../../components/report/ReportComponent";
import PersonalDetails from "../../components/report/personalInfo/PersonalDetails";
import { formfeildSliceAction } from "../../store/formfeild-slice";

const PersonalInfoPage = (props) => {
  const dispatch = useDispatch();
  const { isFormValid } = useSelector((state) => state.formfeild);
  const continueHandler = (e) => {
    dispatch(
      formfeildSliceAction.setIsTouched({
        id: "Personal information",
        isTouched: true,
      })
    );
    if (!isFormValid) {
      e.preventDefault();
    } else {
      dispatch(formfeildSliceAction.reset());
    }
  };
  const backHandler = () => {
    dispatch(formfeildSliceAction.reset());
  };
  return (
    <ReportComponent
      progress="1"
      toContinue="/createreport/review"
      toBack=".."
      onContinue={continueHandler}
      onBack={backHandler}
    >
      <ReportCard>
        <PersonalDetails />
      </ReportCard>
    </ReportComponent>
  );
};
export default PersonalInfoPage;
