import CostInputFeild from "./CostInputFeild";
import { useDispatch, useSelector } from "react-redux";
import { formDataAction } from "../../../store/formData-slice";
import { useEffect } from "react";
import { formfeildSliceAction } from "../../../store/formfeild-slice";

export const ExpenseFeild = (props) => {
  const dispatch = useDispatch();
  const inputChangeHandler = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({
        id: props.hash,
        name: props.id,
        value: input,
      })
    );
    dispatch(formDataAction.setAllExpenseSum(props.hash));
  };
  return <CostInputFeild id={props.id} onChange={inputChangeHandler} />;
};

const MonthlyExpense = (props) => {
  const dispatch = useDispatch();
  const { isDataValid } = useSelector((state) => state.formdata);
  useEffect(() => {
    if (!isDataValid.monthlyExpenseValid) {
      dispatch(formfeildSliceAction.setIndex({ id: 2, set: 6 }));
    }
  }, [isDataValid.monthlyExpenseValid]);

  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
        Monthly Expense
      </h1>
      <p className="text-xs md:text-sm">
        please select all your monthly expenses.
      </p>
      <div className="space-y-3">
        <ExpenseFeild id="Reneted building" hash={6} />
        <ExpenseFeild id="Salary" hash={6} />
        <ExpenseFeild id="Procurement" hash={6} />
        <ExpenseFeild id="Stationary expenses" hash={6} />
        <ExpenseFeild id="Electricity/water" hash={6} />
        <ExpenseFeild id="Repair & maintenance" hash={6} />
        <ExpenseFeild id="Transportation" hash={6} />
        <ExpenseFeild id="Internet Charges" hash={6} />
        <ExpenseFeild id="Marketing cost" hash={6} />
        <ExpenseFeild id="Miscellaneous " hash={6} />
      </div>
      {!isDataValid.monthlyExpenseValid && (
        <p className="px-2 bg-red-50 border border-red-400 mt-4 rounded-lg py-2 text-red-800">
          Remember:Total sum should be grater than zero.
        </p>
      )}
    </>
  );
};
export default MonthlyExpense;
