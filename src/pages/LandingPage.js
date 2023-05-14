import MobileNav from "../components/navigation/MobileNav";
import Hero from "../components/heroSection/Hero";
import SampleReport from "../components/sampleReport/SampleReport ";
import Steps from "../components/steps/Steps";
import Benifits from "../components/benifitsSection/Benifits";
import { useSelector } from "react-redux";
const LandingPage = (props) => {
  return (
    <>
      <Hero />
      <SampleReport />
      <Steps />
      <Benifits />
    </>
  );
};
export default LandingPage;
