const Error = (props) => {
  let errorMessages = [];
  if (props.error) {
    const errorArray = Object.values(props.error);
    errorMessages = [];
    errorArray.map((item) =>
      item.map((message) => errorMessages.push(message))
    );
  }

  return (
    <div
      className={`w-full text-sm md:text-base  border md:border-2 border-red-400 bg-red-50 rounded-lg p-2  ${
        props.className ? props.className : ""
      }`}
    >
      <ul className="space-y-1">
        {errorMessages.map((item) => (
          <li key={Math.random()}>• {item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Error;
