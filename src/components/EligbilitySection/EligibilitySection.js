import Card from "../../UI/Card";

import EligibilityForm from "./EligibilityForm";

const EligibilitySection = (props) => {
  return (
    <Card className="flex flex-col items-center py-12">
      <h1 className="text-2xl md:text-4xl text-center xl:text-5xl font-bold tracking-tight text-deepBlue my-10 max-w-3xl ">
        <span className="text-Blue-500">Onesetu</span> Is all you need for your
        MSME loan
      </h1>
      <div className="w-full flex items-center">
        <div className="flex flex-col lg:flex-row gap-12 justify-between mx-auto min-w-0 lg:w-full mt-12">
          <EligibilityForm className="basis-1/2" />
          <div className="relative basis-1/2  report-div rounded-lg border-2 ">
            <div className="flex flex-col justify-between py-8 lg:py-12 lg:pl-20 lg:pr-4 px-10 md:px-28 min-h-[400px] md:min-h-[600px] h-full tracking-tight gap-12">
              <span className="mt-28 lg:mt-44">
                <p className="text-base lg:text-xl font-bold text-Blue-500">
                  Project Report
                </p>
                <p className="text-2xl lg:text-4xl font-bold text-Blue-500">
                  Sk Super Market
                </p>
              </span>
              <button className="text-xs lg:text-base font-semibold lg:font-bold bg-Blue-500 rounded-full px-6 py-4 text-white shadow-box-5  mx-auto  flex items-center gap-4 hover:scale-110 duration-500">
                Download Sample Report{" "}
                <span className="w-4 h-4 rounded-full bg-white text-Blue-500 flex justify-center items-center">
                  ↓
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default EligibilitySection;
