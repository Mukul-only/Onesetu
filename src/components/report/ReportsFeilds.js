import ReportCard from "./ReportCard";
import FirstFeild from "./grainComponents/FirstFeild";
import SecondFeild from "./grainComponents/SecondFeild";
import ThirdFeild from "./grainComponents/ThirdFeild";
import FourthFeild from "./grainComponents/FourthFeild";
import SelectAllFeild from "./grainComponents/SelectAllFeild";
import { useSelector } from "react-redux";
const REPORT_FEILD = [
  <ReportCard key="0">
    <FirstFeild />
  </ReportCard>,
  <ReportCard key="1">
    <SecondFeild />
  </ReportCard>,
  <ReportCard key="2">
    <ThirdFeild />
  </ReportCard>,
  <ReportCard key="3">
    <FourthFeild />
  </ReportCard>,
  <ReportCard key="4">
    <p>Monthly Expense</p>
  </ReportCard>,
];
const ReportsFeilds = () => {
  const index = useSelector((state) => state.formfeild.index);
  const needFor = useSelector((state) => state.formfeild.needFor);
  const renderFeild = [];
  let ar = 0;
  for (let i = 0; i <= index; i++) {
    if (i === 4 && (needFor === "tw" || needFor === "term")) {
      renderFeild.push(
        <ReportCard key="4">
          <SelectAllFeild />
        </ReportCard>
      );
    } else {
      renderFeild.push(REPORT_FEILD[ar]);
      ar++;
    }
  }

  return <>{renderFeild}</>;
};
export default ReportsFeilds;
