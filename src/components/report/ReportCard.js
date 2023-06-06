import classes from "./ReportCard.module.css";
const ReportCard = (props) => {
  return (
    <div
      className={`flex  overflow-hidden rounded-xl shadow-report w-full border border-gray-300 ${
        props.animationDisable ? "" : classes["fade-in"]
      } `}
    >
      {!props.sideBarNone && <div className="w-2 md:w-3 bg-Blue-500" />}
      <div
        className={`flex-1 px-4 py-6 md:px-8 md:py-10 bg-white ${
          props.className ? props.className : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};
export default ReportCard;
