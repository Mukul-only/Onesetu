import Card from "../../UI/Card";
import SVG from "../../svg/SVG";
import Brand from "../../svg/Brand";
import IndiaFlag from "../../svg/IndiaFlag";
import { CreateReportBtn } from "../heroSection/Hero";

const AboutusSection = (props) => {
  return (
    <Card className="flex flex-col-reverse xl:flex-row justify-between gap-6 py-12 items-center">
      <div className="text-center xl:text-left flex flex-col items-center xl:items-start">
        <span className="text-2xl xl:text-4xl text-Blue-500 flex items-center gap-4">
          <span className="block w-12 border-t border-Blue-500" />
          <h1>About Us</h1>
        </span>
        <h1 className=" text-3xl xl:text-5xl font-bold text-deepBlue mt-6">
          Say hello to
        </h1>
        <span className="flex items-center">
          {" "}
          <SVG svg={Brand} className="w-28 h-12 xl:w-44 xl:h-16 " />{" "}
          <SVG svg={IndiaFlag} className="w-12 h-6 xl:w-16 xl:h-8 " />
        </span>
        <p className="text-sm xl:text-base max-w-2xl text-gray-400 my-6">
          Hello, we’re Onesetu we are building a platform where we will connect
          MSME from real Bharat to 20 million + Money lenders giving business'
          growth opportunity to both side , MSME can create Free project report
          and get loan from bank or From our money lender’s network . There
          report will be shared to lenders and they can Bid on loan interest ,
          Broweer can choose the lowest loan interest offer and can continue
          ,Whereas Money lender will get more Leads to grow there lending
          business digitally plus they can add there offline leads and manage
          them with onesetu dashboard
        </p>
        <CreateReportBtn
          text="Get free project report"
          className="text-sm  xl:text-lg rounded-md font-semibold px-10 py-3 mt-12"
        />
      </div>
      <img
        src={require("../../assets/Frame 1000001424.png")}
        className=" w-max xl:h-[40rem]"
      />
    </Card>
  );
};
export default AboutusSection;
