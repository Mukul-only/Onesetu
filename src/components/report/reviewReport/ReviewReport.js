import Button from "../../../UI/Button";
import Card from "../../../UI/Card";
import ProgressBar from "../ProgressBar";
import bird from "../../../assets/bird.svg";
import arrow from "../../../assets/swirl-arrow.svg";
import text from "../../../assets/text-approve.svg";
import report from "../../../assets/report.svg";
import down from "../../../assets/download.svg";
import { useDispatch, useSelector } from "react-redux";
import LoanBanner from "./LoanBanner";
import FeedBack from "../../globalComponents/FeedBack";
import { Link } from "react-router-dom";

import ReportPdf from "../ReportPdf";

const ReviewReport = (props) => {
  let projectName = useSelector(
    (state) => state.formdata.allExpensedata["Name of firm"]
  );
  if (projectName?.length >= 8) {
    projectName = projectName.slice(0, 8) + "...";
  }
  return (
    <>
      <section id="review" className="bg-grad pb-64">
        <Card className="relative flex flex-col items-center">
          <img
            src={bird}
            className="absolute top-[22rem] md:top-64 xl:right-0 right-4"
          />
          <div className="flex items-center my-12 justify-center">
            <ProgressBar progress="2" />
          </div>
          <h1 className="font-bold text-xl md:text-2xl xl:text-5xl text-deepBlue-800 text-center leading-tight xl:leading-relaxed tracking-tighter">
            Your Report is ready to{" "}
            <span className="text-Blue-500">Download</span> &{" "}
            <span className="text-Purple-500">Submit</span> your report to our
            loan agents to get approved loan
          </h1>
          <p className="text-xs md:text-sm xl:text-xl text-deepBlue-800 max-w-lg xl:max-w-3xl md:max-w-xl text-center my-6">
            No worries if the bank requests changes to your report, you can make
            them for free and download the updated version as needed.
          </p>
          <div className="relative space-x-2 md:space-x-4  text-sm xl:text-lg font-semibold my-10">
            <Link to="/createreport/?mode=edit">
              <Button className="min-w-0 w-32 xl:w-[294px] py-3 xl:py-4 text-Blue-500 hover:scale-110 duration-500">
                Edit Report
              </Button>
            </Link>
            <Button className="min-w-0 w-32 md:w-36 xl:w-[294px] py-3 xl:py-4 border-Purple-500 bg-Purple-500 text-white hover:scale-110 duration-500">
              Apply for loan
            </Button>
            <img
              src={arrow}
              className="absolute left-full bottom-0 hidden xl:block"
            />
            <img
              src={text}
              className="absolute left-[100%] bottom-16 hidden xl:block"
            />
          </div>
        </Card>
      </section>
      <Card className="-mt-36 flex justify-center">
        <div className="relative">
          <img src={report} className="relative" />
          <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 text-Blue-500 tracking-tighter -space-y-1 md:space-y-0">
            <p className="text-sm sm:text-base smm:text-lg md:text-2xl xl:text-3xl font-bold">
              Project Report
            </p>
            <h1 className="text-lg sm:text-2xl smm:text-3xl md:text-4xl xl:text-5xl font-bold">
              {projectName}
            </h1>
          </div>
          <button
            className="absolute flex justify-center items-center space-x-8 xl:space-x-20 border-2 text-sm smm:text-lg font-semibold xl:font-bold xl:text-3xl text-white shadow-box-5 border-Blue-500 bg-Blue-500 bottom-[10%] left-1/2 -translate-x-1/2 px-7 sm:px-10 md:px-14 xl:w-[654px] py-2 sm:py-3  xl:py-6 rounded-full hover:scale-110 duration-500 hover:bg-white hover:text-Blue-500"
            onClick={props.onClick}
          >
            <span className="whitespace-nowrap">Download Report</span>
            <img src={down} className="w-5 smm:w-8 md:w-auto" />
          </button>
        </div>
      </Card>
      <ReportPdf onClick={props.onClick} />
      <LoanBanner
        title="Apply For Quick & Easy Loan"
        sub=" Fast MSME loans with Onesetu . Submit project report & PAN card.
            Access funds from trusted money lenders. No bank delays or
            rejections."
        btnText="Submit report & get loan"
      >
        <div className="flex space-x-1 xl:flex-row flex-col items-center xl:items-start">
          <div className="bg-white shadow-box mt-6 w-[325px] xl:w-[372.8px] h-max p-[20px] text-center font-semibold text-Purple-500 rounded-xl xl:-mr-12 text-sm xl:text-lg">
            Got Approved Loan of 5 Lakh from Onesetu in just 24 Hours
          </div>
          <div className="relative w-max">
            <div className="absolute w-full h-[70%] bottom-0 left-0 bg-Purple-600 rounded-t-full" />
            <img
              src={require("../../../assets/hero.png")}
              alt="img"
              className="relative z-10 w-56 xl:w-72"
            />
          </div>
        </div>
      </LoanBanner>

      <FeedBack className="">
        <h1 className="text-3xl xl:text-5xl font-bold tracking-tighter max-w-xl text-center mx-auto text-deepBlue-800">
          MSME Love <span className="text-Blue-500">Onesetu </span>
        </h1>

        <p className="max-w-xl mx-auto text-center font-medium text-base xl:text-xl mt-6 xl:mt-10 text-deepBlue-800">
          1000+ Reviews Of Delighted Clients with onesetu
        </p>
      </FeedBack>
    </>
  );
};
export default ReviewReport;
