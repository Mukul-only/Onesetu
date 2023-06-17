import Card from "../../UI/Card";
import Button from "../../UI/Button";

import { Link } from "react-router-dom";
import Arrow from "../../svg/Arrow";
import SVG from "../../svg/SVG";
import Invoice from "../../svg/Invoice";
import Tradevalue from "../../svg/Tradevalue";
import Clearservice from "../../svg/Clearservice";
export const CreateReportBtn = (props) => {
  return (
    <Link to="/createreport">
      <button
        className={`flex space-x-3 items-center  bg-Blue-500 text-white   hover:scale-110 w-max   duration-500 ease-in-out ${
          props.className
            ? props.className
            : "font-medium xl:font-bold border-[6px] border-Blue-100 rounded-xl px-4 py-3 xl:px-8 xl:py-4 text-base xl:text-xl hover:shadow-xl"
        }`}
      >
        <span>{props.text}</span>
        <SVG svg={Arrow} className="xl:w-5 xl:h-5 w-3 h-3" />
      </button>
    </Link>
  );
};

const AltCard = (props) => {
  return (
    <div className="relative bg-white rounded-xl shadow-card pl-8 pr-16 border pt-6 pb-24 space-y-2 xl:space-y-4 ">
      <h1 className="text-2xl xl:text-4xl font-bold text-deepBlue">
        {props.title}
      </h1>
      <p className="text-lg xl:text-xl font-medium text-gray-500 max-w-xs  leading-tight">
        {props.subTitle}
      </p>
      <div className="absolute bottom-4 right-4">
        <SVG svg={props.svg} className="w-12 h-12" />
      </div>
    </div>
  );
};

const Hero = (props) => {
  return (
    <>
      <section id="hero" className="bg-grad pb-32">
        <Card className="flex flex-col justify-center items-center py-20 xl:py-24 space-y-8 xl:space-y-12 ">
          <h1 className="text-3xl md:text-4xl text-center xl:text-6xl tracking-tight font-bold text-deepBlue">
            Save <span className="text-Blue-500">Efforts</span> Save{" "}
            <span className="text-Green-500">Money</span> Save{" "}
            <span className="text-Purple-500"> Time.</span>
          </h1>
          <p className="text-sm xl:text-xl xl:font-medium text-gray-500 max-w-md  xl:max-w-3xl text-center">
            Avoid the frustration and time consumption of traditional bank
            loans. Receive multiple loan offers, negotiate, and choose the best
            option.
          </p>
          <CreateReportBtn text="Create Report & Get Loan" />
        </Card>
      </section>
      <div className="flex flex-col md:flex-row gap-4 justify-center -mt-24 px-8 items-center md:items-stretch">
        <AltCard
          subTitle="Reports are created using Onesetu"
          title="1000+"
          svg={Invoice}
        />
        <AltCard
          title="85Lakh+"
          subTitle="Loan is processed by Onesetu report"
          svg={Tradevalue}
        />
        <AltCard
          title="500+"
          subTitle="Money Lenders network which can give you loan"
          svg={Clearservice}
        />
      </div>
    </>
  );
};

export default Hero;
