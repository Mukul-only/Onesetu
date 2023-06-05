import Card from "../../../UI/Card";
import arrow from "../../../assets/arrow.svg";
const LoanBanner = (props) => {
  return (
    <div className="bg-Purple-500 pt-24 my-12">
      <Card className="flex flex-col xl:flex-row justify-between space-y-20 xl:space-x-6 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 xl:items-start">
          <div className="xl:space-y-2 text-3xl xl:text-[42px] font-[800]  ">
            <h1 className="block text-white text-center max-w-xs md:max-w-2xl">
              Apply For Quick & Easy Loan
            </h1>
          </div>
          <p className="text-white text-center max-w-[300px] mt-12 font-bold  text-sm md:text-lg  md:max-w-2xl xl:text-left">
            Fast MSME loans with Onesetu . Submit project report & PAN card.
            Access funds from trusted money lenders. No bank delays or
            rejections.
          </p>
          <button className="flex items-center text-Purple-500 bg-white px-6 md:px-8 py-3 font-semibold tracking-tight md:font-bold text-base md:text-lg rounded-lg my-8 space-x-4">
            <span>Submit report & get loan</span>
            <img src={arrow} className="w-8 md:w-auto" />
          </button>
        </div>
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
      </Card>
    </div>
  );
};
export default LoanBanner;
