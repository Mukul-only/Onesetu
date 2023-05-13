import Card from "../../UI/Card";
import { CreateReportBtn } from "../heroSection/Hero";
import BenifitCard from "./BenifitCard";
import support from "../../assets/support.svg";
import visa from "../../assets/visa.svg";
import easyloan from "../../assets/easyloan.svg";
import nofee from "../../assets/nofee.svg";
import arc from "../../assets/arc.svg";

const Benifits = (props) => {
  return (
    <div className="relative bg-lightBlue pt-24 mt-44 isolate">
      <img src={arc} className="absolute bottom-0 right-0 -z-10" />
      <Card className="flex xl:flex-row flex-col justify-between gap-8">
        <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-deepBlue max-w-lg  xl:max-w-sm">
            Benefits of using <span className="text-cyanY">Onesetu</span> rather
            than traditional CAs ?
          </h1>
          <p className="text-sm md:text-md text-deepBlue max-w-md mt-2">
            Onesetu is all you need to grow your bussiness without paying any
            cost to CA , Banks or loan agents
          </p>
          <CreateReportBtn />
        </div>
        <div className="grid md:grid-cols-2 gap-8 pb-16 mt-16 xl:mt-0 justify-items-center">
          <BenifitCard
            svg={support}
            heading="24/7 Support of experts"
            description="We are the only online option that provides full-time support of Experts"
          />
          <BenifitCard
            svg={nofee}
            heading="10x Cheaper than CA"
            description="Complelety Free to use software made for Indian MSME owners like you"
          />
          <BenifitCard
            svg={visa}
            heading="Does all calculation in one click"
            description="Our Report Builder is calculates all report data for you as per the Bank's requirements."
          />
          <BenifitCard
            svg={easyloan}
            heading="Accepted by all banks in india"
            description="The income tax return serves as an
            important document for loan
            approval"
          />
        </div>
      </Card>
    </div>
  );
};
export default Benifits;
