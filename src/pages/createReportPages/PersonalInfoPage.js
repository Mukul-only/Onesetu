import ReportComponent from "../../components/report/ReportComponent";
const PersonalInfoPage = (props) => {
  return (
    <ReportComponent progress="1" toContinue="/createreport/review" toBack="..">
      <div className="flex overflow-hidden rounded-xl shadow-report w-full">
        <div className="w-2 md:w-3 bg-darkBlue" />
        <div className="flex-1 px-4 py-6 md:px-12 md:py-16 bg-white ">
          <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
            Why are you here ? 🤣
          </h1>
          <p className="text-xs md:text-sm">lol</p>
        </div>
      </div>
    </ReportComponent>
  );
};
export default PersonalInfoPage;
