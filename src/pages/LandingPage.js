import Hero from "../components/heroSection/Hero";

import Steps from "../components/steps/Steps";
import FillerSection from "../components/FillerSection/FillerSection";
import LoanBanner from "../components/report/reviewReport/LoanBanner";
import EligibilitySection from "../components/EligbilitySection/EligibilitySection";
import AboutusSection from "../components/Aboutus/AboutusSection";
import FeedBack from "../components/globalComponents/FeedBack";
import { useEffect } from "react";
import SVG from "../svg/SVG";
import Rocket from "../svg/Rocket";
import FAQsection from "../FAQs/FAQsection";
import AskSection from "../FAQs/AskSection";
const LandingPage = (props) => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />

      <Steps />
      <EligibilitySection />
      <FillerSection />
      <AboutusSection />
      <FeedBack className="my-24">
        <h1 className="text-3xl xl:text-5xl font-bold tracking-tight max-w-3xl xl:leading-relaxed text-center mx-auto text-deepBlue-800">
          Both MSME and Money Lenders Trust{" "}
          <span className="text-Blue-500">Onesetu </span>
        </h1>

        <p className="max-w-xl mx-auto text-center font-medium text-base xl:text-xl mt-6 xl:mt-10 text-deepBlue-800">
          1000+ Reviews Of Delighted Clients with onesetu
        </p>
      </FeedBack>
      <LoanBanner
        title="Money Lenders Join Onesetu & Grow your  Lending business hassle Free"
        sub=" Money Lenders can leverage the Onesetu platform to grow their lending business digitally. By partnering with us, Money Lenders gain access to a steady stream of qualified leads, enhancing their customer base and fueling their growth ambitions."
        btnText="I’m Ready to Grow my lending business"
      >
        <div className="pb-32 xl:pt-12  xl:pb-44 w-full xl:w-auto">
          <SVG svg={Rocket} className="w-full h-64 xl:w-[32rem] xl:h-80" />
        </div>
      </LoanBanner>
      <FAQsection />
      <AskSection />
    </>
  );
};
export default LandingPage;
