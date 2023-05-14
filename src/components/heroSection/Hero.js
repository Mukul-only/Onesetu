import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { useTypewriter } from "react-simple-typewriter";
import classes from "./Hero.module.css";
export const CreateReportBtn = (props) => {
  return (
    <Button className="font-semibold bg-darkBlue text-white px-16 py-4 mt-14 hover:bg-opacity-95 w-max text-lg  duration-500 ease-in-out">
      Create Report
    </Button>
  );
};
const Hero = (props) => {
  const [type] = useTypewriter({
    words: ["MSME Loan", "PMEGP Loan", "Mudra Loan", "Any Loan"],
    typeSpeed: 100,
    deleteSpeed: 60,
    loop: 0,
  });
  return (
    <div className="bg-lightBlue pt-24">
      <Card className="flex flex-col xl:flex-row justify-between space-y-20 xl:space-x-6 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 xl:items-start">
          <div className="xl:space-y-2 text-4xl xl:text-5xl font-[800]  ">
            <span className="block text-deepBlue text-center">
              Make Project report for
            </span>
            <div
              className={`flex items-center space-x-2 justify-center xl:justify-start `}
            >
              <span className="block text-cyanY ">{type}</span>
              <span
                className={`block w-2 h-14 xl:h-16 bg-cyanY rounded-lg ${classes.cursor}`}
              />
            </div>
          </div>
          <p className="text-deepBlue text-center max-w-[300px] mt-4  text-sm xl:text-lg  xl:max-w-sm xl:text-left">
            Our Report is accepted for Mudra Loan, PMEGP, MSME, or any Bank
            Loan!
          </p>
          <CreateReportBtn />
        </div>
        <div className="flex space-x-1 xl:flex-row flex-col items-center xl:items-start">
          <div className="bg-white shadow-box mt-6 w-[325px] xl:w-[372.8px] h-max py-[9.81065px] px-[19.3392px] text-center font-semibold text-darkBlue rounded-xl xl:-mr-12 text-sm xl:text-lg">
            I had made my report for FREE ! CA charges ₹8000 for report but
            onesetu is quick and easy software
          </div>
          <div className="relative w-max">
            <div className="absolute w-full h-[70%] bottom-0 left-0 bg-darkBlue rounded-t-full" />
            <img
              src={require("../../assets/hero.png")}
              alt="img"
              className="relative z-10 w-56 xl:w-72"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
