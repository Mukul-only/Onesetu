import Card from "../../UI/Card";
const AltCard = (props) => {
  return (
    <div className="rounded-lg bg-gray-100 p-12 text-center xl:text-left">
      <h1 className="font-bold text-xl xl:text-3xl text-deepBlue">
        {props.title}
      </h1>
      <p className="mt-6 font-medium text-sm text-gray-500 xl:text-xl max-w-[14rem]">
        {props.sub}
      </p>
    </div>
  );
};

const FillerSection = (props) => {
  return (
    <Card className="flex flex-col xl:flex-row justify-between gap-6 py-20 items-center xl:items-stretch">
      <div className="flex justify-between gap-4 flex-col md:flex-row">
        <AltCard
          title="20 Million +"
          sub="Money lenders in India lend to small and medium businesses"
        />
        <AltCard
          title="$300B"
          sub="Credit gap for SMEs in India. Our mission is to bridge this gap"
        />
      </div>
      <div className="rounded-lg p-6 xl:p-12 text-center xl:text-left">
        <h1 className="font-bold text-2xl xl:text-5xl text-deepBlue max-w-sm xl:max-w-lg xl:leading-[62px]">
          Bridging the Credit Gap For MSMEs
        </h1>
        <p className="mt-6  text-sm text-gray-500 xl:text-base max-w-sm">
          We are on a mission to connect Business owner to money lenders across
          India to get instant business loan which is safe and fast than
          traditional banking method
        </p>
      </div>
    </Card>
  );
};
export default FillerSection;
