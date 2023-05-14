import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import HamDispatch from "../util/HamDispatch";
const ErrorPage = (props) => {
  const dispatch = HamDispatch();
  const gotoHomeHandler = () => {
    dispatch.notActive();
  };
  return (
    <div className="bg-[#e5e8f5] min-h-screen">
      <Navigation />

      <Card className="flex flex-col items-center mt-16  space-y-6 text-center pb-32">
        <img
          src={require("../assets/UnderConstruction.png")}
          alt="under construction"
          className="w-[44rem]"
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-deepBlue">
          This page is under construction!
        </h1>
        <Link
          to="/"
          className="rounded-lg bg-darkBlue text-white font-semibold shadow-btn px-10 py-2 text-md md:text-lg hover:bg-opacity-95 duration-500"
          onClick={gotoHomeHandler}
        >
          Go to home
        </Link>
      </Card>

      <Footer className="fixed bottom-0 left-0 right-0" />
    </div>
  );
};
export default ErrorPage;
