import check from "./check.svg";

const ProgressElement = (props) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      {props.isActive && <img src={check} className="w-5 md:w-8" />}
      <p
        className={`font-semibold text-xs md:text-lg text-center ${
          props.isActive ? "text-Blue-500" : "text-grayY"
        }`}
      >
        {props.title}
      </p>
    </div>
  );
};
const ProgressBar = (props) => {
  const line =
    "w-16 md:w-40 xl:w-60 h-[2px] rounded-full mx-2 md:mx-6 mt-5 md:mt-0 mb-3 xl:mb-0";

  return (
    <>
      <ProgressElement title="Business Info" isActive={props.progress} />
      <div
        className={`${line} ${
          props.progress === "1" || props.progress === "2"
            ? "bg-Blue-500"
            : "bg-Green-500"
        }`}
      />
      <ProgressElement
        title="Personal Info"
        isActive={props.progress === "1" || props.progress === "2"}
      />

      <div
        className={`${line} ${
          props.progress === "2" ? "bg-Blue-500" : "bg-Green-500"
        }`}
      />
      <ProgressElement
        title="Review Report"
        isActive={props.progress === "2"}
      />
    </>
  );
};
export default ProgressBar;
