import check from "./check.svg";
const ProgressElement = (props) => {
  return (
    <>
      {props.isActive && <img src={check} className="w-6 md:w-8" />}
      <p
        className={`font-semibold text-xs md:text-lg text-center ${
          props.isActive ? "text-darkBlue" : "text-grayY"
        }`}
      >
        {props.title}
      </p>
    </>
  );
};
const ProgressBar = (props) => {
  const line = "w-24 md:w-44 xl:w-60 h-[2px] rounded-full mx-2 md:mx-6";

  return (
    <>
      <ProgressElement title="Business Info" isActive={props.progress} />
      <div
        className={`${line} ${
          props.progress === "1" || props.progress === "2"
            ? "bg-darkBlue"
            : "bg-cyanY"
        }`}
      />
      <ProgressElement
        title="Personal Info"
        isActive={props.progress === "1" || props.progress === "2"}
      />

      <div
        className={`${line} ${
          props.progress === "2" ? "bg-darkBlue" : "bg-cyanY"
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
