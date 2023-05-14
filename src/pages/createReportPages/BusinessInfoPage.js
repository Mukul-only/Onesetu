import ReportComponent from "../../components/report/ReportComponent";
const BusinessInfoPage = () => {
  return (
    <ReportComponent progress="0" toContinue="personalinfo">
      <div className="flex overflow-hidden rounded-xl shadow-report w-full">
        <div className="w-2 md:w-3 bg-darkBlue" />
        <div className="flex-1 px-4 py-6 md:px-12 md:py-16 bg-white ">
          <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
            What’s the name of your firm?
          </h1>
          <p className="text-xs md:text-sm">Enter the whole legal name.</p>
          <input
            type="text"
            placeholder="Company Name"
            className="mt-8 text-sm md:text-xl w-full md:py-5 p-2 md:px-4 border-2 rounded-md xl:rounded-2xl border-fadeBlue bg-xfadeBlue outline-none"
          />
        </div>
      </div>
    </ReportComponent>
  );
};
export default BusinessInfoPage;
