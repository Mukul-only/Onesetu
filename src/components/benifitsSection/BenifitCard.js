const BenifitCard = (props) => {
  return (
    <div className="bg-white rounded-xl shadow-card px-12 py-8 space-y-3 max-w-max">
      <img src={props.svg} alt="svg" />
      <h1 className="font-bold text-lg md:text-xl max-w-xs">{props.heading}</h1>
      <p className="max-w-xs text-md md:text-lg">{props.description}</p>
    </div>
  );
};
export default BenifitCard;
