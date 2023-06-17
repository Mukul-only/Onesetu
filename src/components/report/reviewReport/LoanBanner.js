import Card from "../../../UI/Card";
import arrow from "../../../assets/arrow.svg";
const LoanBanner = (props) => {
  return (
    <div className="bg-Purple-500 pt-24 my-12">
      <Card className="flex flex-col xl:flex-row justify-between space-y-20 xl:space-x-6 xl:space-y-0 items-center xl:items-stretch">
        <div className="flex flex-col items-center pt-8 xl:items-start">
          <div className="xl:space-y-2 text-2xl xl:text-[42px] font-[800]  ">
            <h1 className="block text-white text-center xl:text-left xl:leading-[3rem] max-w-xs md:max-w-3xl">
              {props.title}
            </h1>
          </div>
          <p className="text-white text-center max-w-[300px] mt-6 xl:mt-12 font-medium    text-sm md:text-lg  md:max-w-2xl xl:text-left">
            {props.sub}
          </p>
          <button className="flex items-center text-Purple-500 bg-white px-6 md:px-8 py-3 font-semibold tracking-tight md:font-bold text-base md:text-lg rounded-lg my-8 space-x-4 hover:scale-105 hover:shadow-xl duration-500">
            <span>{props.btnText}</span>
            <img src={arrow} className="w-8 md:w-auto" />
          </button>
        </div>
        {props.children}
      </Card>
    </div>
  );
};
export default LoanBanner;
