import ReportComponent from "../../components/report/ReportComponent";
const ReviewReportPage = () => {
  return (
    <ReportComponent progress="2" toBack="/createreport/personalinfo">
      <div className="flex overflow-hidden rounded-xl shadow-report w-full">
        <div className="w-2 md:w-3 bg-darkBlue" />
        <div className="flex-1 px-4 py-6 md:px-12 md:py-16 bg-white ">
          <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
            Bhai tu kb se report bnane lga!
          </h1>
          <p className="text-xs md:text-sm">😘😘</p>
          <video
            preload="auto"
            autoPlay="true"
            controls
            className="rounded-lg shadow-box"
          >
            <source
              src={require("../../assets/lagichutenmeme.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </ReportComponent>
  );
};
export default ReviewReportPage;
