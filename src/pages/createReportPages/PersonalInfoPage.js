import { useDispatch, useSelector } from "react-redux";
import ReportCard from "../../components/report/ReportCard";
import ReportComponent from "../../components/report/ReportComponent";
import PersonalDetails from "../../components/report/personalInfo/PersonalDetails";
import { formfeildSliceAction } from "../../store/formfeild-slice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const PersonalInfoPage = (props) => {
  const dispatch = useDispatch();
  const reportData = useSelector((state) => state.formdata.allExpensedata);
  const { isFormValid } = useSelector((state) => state.formfeild);
  const [searchParams] = useSearchParams();
  const isEdit = searchParams.get("mode") === "edit";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      dispatch(formfeildSliceAction.reset());
    };
  }, []);
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
      toBack={`${isEdit ? "/createreport/?mode=edit" : ".."}`}
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
