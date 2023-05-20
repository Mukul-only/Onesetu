import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Success = (props) => {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  const clickHandler = () => {
    navigate("personalinfo");
    document.body.style.overflow = "auto";
  };
  return (
    <div className="absolute inset-0 z-10  flex items-center justify-center  bg-black bg-opacity-10">
      <div className="flex flex-col items-center rounded-lg bg-white p-8 border ">
        <h1 className="text-base xl:text-xl font-semibold">
          Consider paying to the developer.
        </h1>
        <p className="text-sm md:text-base text-gray-500">
          My UPI: 9696373283@axl
        </p>
        <img src={require("./../assets/smile.png")} className="w-20  mt-8" />
        <Button
          className="w-40 py-2 bg-darkBlue text-white mt-12"
          onClick={clickHandler}
        >
          Pay & Continue
        </Button>
      </div>
    </div>
  );
};
export default Success;
