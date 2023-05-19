const ReportCard = (props) => {
  return (
    <div className="flex overflow-hidden rounded-xl shadow-report w-full border border-gray-300">
      <div className="w-2 md:w-3 bg-darkBlue" />
      <div className="flex-1 px-4 py-6 md:px-8 md:py-10 bg-white ">
        {props.children}
      </div>
    </div>
  );
};
export default ReportCard;
