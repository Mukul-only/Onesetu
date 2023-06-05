import { useSelector } from "react-redux";
const ConfirmCostFeild = (props) => {
  return (
    <div className="flex w-full justify-between space-x-2 text-sm md:text-base">
      <p className={`${props.h ? "text-base md:text-lg font-semibold" : ""}`}>
        {props.title}
      </p>
      <p
        className={`min-w-max ${props.h ? "font-semibold" : ""} ${
          props.highlight ? "text-cyan-600" : ""
        }`}
      >
        ₹ {props.money}
      </p>
    </div>
  );
};
const ConfirmCost = (props) => {
  const { allExpenseSum } = useSelector((state) => state.formdata);
  const sum = allExpenseSum.allExpenseNeededSum;
  const marginMoney = (sum * 0.18).toFixed(2);
  const eligibleAmount = (sum - marginMoney).toFixed(2);
  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
        Confirm the figures you have entered
      </h1>
      <p className="text-xs md:text-sm">
        Adjust the loan amount by increasing the initial expenses of edit loan
        details after creating the report.
      </p>
      <div className="mt-8 ">
        <ConfirmCostFeild title="Total project cost" money={sum} h />
        <ConfirmCostFeild
          title="Your investment (margin money) 18%"
          money={marginMoney}
        />
        <hr className="border-t my-4" />
        <ConfirmCostFeild
          title="Eligible loan amount"
          money={eligibleAmount}
          highlight
        />
        <p className="text-xs md:text-sm text-gray-500 max-w-[150px] md:max-w-[400px]">
          Can change all the values after creating the reports.
        </p>
      </div>
    </>
  );
};
export default ConfirmCost;
