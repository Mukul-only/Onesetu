import ReportCard from "./ReportCard";
import FirstFeild from "./grainComponents/FirstFeild";
import SecondFeild from "./grainComponents/SecondFeild";
import ThirdFeild from "./grainComponents/ThirdFeild";
import FourthFeild from "./grainComponents/FourthFeild";
import SelectAllFeild from "./grainComponents/SelectAllFeild";
import { useSelector } from "react-redux";
import ConfirmCost from "./grainComponents/ConfirmCost";
import MonthlyExpense from "./grainComponents/MonthlyExpense";
import BusinessInfo from "./grainComponents/BusinessInfo";
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
  <ReportCard key="6">
    <MonthlyExpense />
  </ReportCard>,
  <ReportCard key="7">
    <BusinessInfo />
  </ReportCard>,
];
const ReportsFeilds = () => {
  const index = useSelector((state) => state.formfeild.index);
  const needFor = useSelector((state) => state.formfeild.needFor);
  const renderFeild = [];
  let ar = 0;
  for (let i = 0; i <= index; i++) {
    if ((i === 4 || i === 5) && (needFor === "tw" || needFor === "term")) {
      if (i === 4) {
        renderFeild.push(
          <ReportCard key="4">
            <SelectAllFeild />
          </ReportCard>
        );
      } else if (i === 5) {
        renderFeild.push(
          <ReportCard key="5">
            <ConfirmCost />
          </ReportCard>
        );
      }
    } else {
      if (i === 4) i = 6;
      renderFeild.push(REPORT_FEILD[ar]);
      ar++;
    }
  }

  return renderFeild;
};
export default ReportsFeilds;
