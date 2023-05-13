const StepCard = (props) => {
  return (
    <div className="flex relative rounded-lg bg-white px-8 xl:px-12  py-16 flex-col items-center max-w-max shadow-card">
      <div className="absolute flex items-center justify-center rounded-full w-16 h-16 xl:w-24 xl:h-24 text-xl xl:text-3xl border-2 border-fadeBlue -top-6 -left-6 xl:-top-8 xl:-left-8 bg-white font-semibold text-darkBlue">
        {props.step}
      </div>
      <img src={props.svg} alt="list" className=" w-16 xl:w-20 mb-16" />
      <h1 className="text-deepBlue font-bold text-xl xl:text-2xl mb-4 text-center">
        {props.heading}
      </h1>
      <p className="max-w-xs text-md xl:text-lg text-center">
        {props.description}
      </p>
    </div>
  );
};
export default StepCard;
