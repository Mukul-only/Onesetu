import ReportComponent from "../../components/report/ReportComponent";
const ReviewReportPage = () => {
  return (
    <ReportComponent progress="2" toBack="/createreport/personalinfo">
      <div className="flex overflow-hidden rounded-xl shadow-report w-full">
        <div className="w-2 md:w-3 bg-darkBlue" />
        <div className="flex-1 px-4 py-6 md:px-12 md:py-16 bg-white ">
          <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
            First:solve ∫4xcos( 2−3x )dx =
          </h1>
          <p className="text-xs md:text-sm">😘😘</p>
        </div>
      </div>
    </ReportComponent>
  );
};
export default ReviewReportPage;
