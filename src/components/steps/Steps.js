import Card from "../../UI/Card";
import StepCard from "./StepCard";
import checkList from "../../assets/checkList.svg";
import phone from "../../assets/phone.svg";
import moneyHand from "../../assets/moneyHand.svg";

const Steps = (props) => {
  return (
    <div className="bg-lightBlue py-16 mb-32">
      <Card className="">
        <p className="text-deepBlue tracking-widest xl:tracking-xWidest text-xs xl:text-sm text-center">
          HOW IT WORKS
        </p>
        <h1 className=" max-w-2xl xl:max-w-4xl text-center mx-auto text-2xl xl:text-4xl font-bold text-deepBlue xl:leading-[45px] mt-12">
          Platform for <span className="text-cyanY ">MSME</span> to make project
          report & apply for bank loan at your comfort zone
        </h1>
        <div className="flex flex-col xl:flex-row gap-12 justify-between xl:-mb-52 mt-32 items-center">
          <StepCard
            step="01."
            svg={checkList}
            heading="Create Your Project report "
            description="Enter few details about your bussiness and generate report in less few clicks"
          />
          <StepCard
            step="02."
            svg={phone}
            heading="Review and Edit your report "
            description="Enter few details about your bussiness and generate report in less few clicks"
          />
          <StepCard
            step="03."
            svg={moneyHand}
            heading="Create Your Project report "
            description="Enter few details about your bussiness and generate report in less few clicks"
          />
        </div>
      </Card>
    </div>
  );
};
export default Steps;
