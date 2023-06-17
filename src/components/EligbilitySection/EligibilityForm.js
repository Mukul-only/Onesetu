const Feild = (props) => {
  return (
    <input
      {...props.input}
      className={`outline-Blue-500 xl:p-4 p-3 text-sm xl:text-base rounded-lg bg-gray-100 border-2 focus:bg-white ${props.className}`}
    />
  );
};
const EligibilityForm = (props) => {
  return (
    <div
      className={`flex flex-col gap-3 px-4 xl:px-12 py-20 bg-white rounded-lg border shadow-card ${props.className}`}
    >
      <p className="text-xs xl:text-sm text-Blue-500 bg-blue-50 border border-Blue-500 px-4 py-2 rounded-full tracking-tight -mt-24  w-max  mb-12">
        Don't Worry No Spam Call Ever
      </p>
      <Feild input={{ type: "text", placeholder: "Your Name" }} />
      <Feild input={{ type: "tel", placeholder: "Mobile no." }} />
      <Feild input={{ type: "number", placeholder: "Years In Business" }} />
      <div className="w-full flex space-x-3">
        <Feild
          input={{ type: "number", placeholder: "Monthly Revenue" }}
          className="basis-1/2 w-0"
        />
        <Feild
          input={{ type: "number", placeholder: "Monthly Profit" }}
          className="basis-1/2 w-0"
        />
      </div>
      <Feild
        input={{ type: "number", placeholder: "Desired Loan Amount You Need" }}
      />
      <Feild
        input={{
          type: "number",
          placeholder: " Enter GSTIN No. ( Skip if you do not have )",
        }}
      />
      <button className="bg-blue-50 border border-Blue-500 px-4 py-2 text-Blue-500 rounded-full w-max mx-auto mt-12 text-sm font-medium hover:shadow-xl hover:scale-105 duration-500">
        Check Your loan Eligibility{" "}
      </button>
    </div>
  );
};
export default EligibilityForm;
