import "./App.css";
import Benifits from "./components/benifitsSection/Benifits";
import Hero from "./components/heroSection/Hero";
import Navigation from "./components/navigation/Navigation";
import SampleReport from "./components/sampleReport/SampleReport ";
import Steps from "./components/steps/Steps";
import Footer from "./components/footer/Footer";
import MobileNav from "./components/navigation/MobileNav";
import { useSelector } from "react-redux";

function App() {
  const active = useSelector((store) => store.hamburger.isActive);
  return (
    <>
      <Navigation />
      <MobileNav
        className={`md:hidden ${
          active ? " space-y-4 py-8" : "h-0 overflow-hidden"
        } duration-300`}
      />

      <Hero />
      <SampleReport />
      <Steps />
      <Benifits />
      <Footer />
    </>
  );
}

export default App;
