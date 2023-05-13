import Card from "../../UI/Card";
import { CreateReportBtn } from "../heroSection/Hero";
import SampleCard from "./SampleCard";
const SampleReport = (props) => {
  return (
    <Card className="flex flex-col xl:flex-row py-24 justify-between space-y-10 xl:space-y-0 xl:space-x-20">
      <div className="space-y-12 flex flex-col items-center xl:items-start">
        <h1 className="max-w-lg xl:max-w-lg font-bold text-3xl xl:text-4xl text-deepBlue text-center xl:text-left ">
          View Sample Report made by MSME owner like you
        </h1>
        <p className="max-w-sm xl:text-lg text-center xl:text-left text-xl ">
          Get idea how other had made there report and make your own report in
          few clicks
        </p>
        <CreateReportBtn />
      </div>
      <div className="flex flex-col xl:flex-row gap-4 items-center">
        <SampleCard
          src={require("../../assets/sampleCard1.png")}
          label="Project report for Readymade shirt manufacturing"
        />
        <SampleCard
          src={require("../../assets/sampleCard2.png")}
          label="Project report for Readymade shirt manufacturing"
        />
      </div>
    </Card>
  );
};
export default SampleReport;
