const FormInput = (props) => {
  return (
    <input
      {...props.input}
      onChange={props.onChange}
      className={`mt-8 text-sm md:text-base w-full md:py-2 p-2 md:px-3 border-2 rounded-md xl:rounded-lg  outline-none ${
        props.hasError
          ? "border-red-300 bg-red-50"
          : "border-fadeBlue bg-xfadeBlue"
      }`}
      onBlur={props.onBlur}
    />
  );
};
export default FormInput;
