import Button from "../../UI/Button";
const SampleCard = (props) => {
  return (
    <div className="flex flex-col items-center px-4  py-[38px] border border-[#00357C40] rounded-lg shadow-card space-y-5 max-w-max">
      <img src={props.src} alt="image" className="w-88" />
      <p className="font-semibold  px-4 max-w-sm text-center">{props.label}</p>
      <Button className="w-full py-3 font-bold text-darkBlue hover:bg-darkBlue hover:text-white duration-500  max-w-sm ease-in-out">
        View Report
      </Button>
    </div>
  );
};
export default SampleCard;
