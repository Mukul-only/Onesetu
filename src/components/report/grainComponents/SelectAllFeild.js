import CostInputFeild from "./CostInputFeild";
import { useDispatch, useSelector } from "react-redux";
import { formDataAction } from "../../../store/formData-slice";
import { useEffect } from "react";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
import { ExpenseFeild } from "./MonthlyExpense";

const SelectAllFeild = (props) => {
  const dispatch = useDispatch();

  const { isDataValid } = useSelector((state) => state.formdata);

  useEffect(() => {
    if (!isDataValid.allExpenseNeededValid) {
      dispatch(formfeildSliceAction.setIndex(4));
    }
  }, [isDataValid.allExpenseNeededValid]);
  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
        What all do you need?
      </h1>
      <p className="text-xs md:text-sm">please select all that you need.</p>
      <div className="space-y-3">
        <ExpenseFeild id="Land" hash={4} />
        <ExpenseFeild id="Shed/ building" hash={4} />
        <ExpenseFeild id="Machinery" hash={4} />
        <ExpenseFeild id="Electronic gaget" hash={4} />
        <ExpenseFeild id="Furniture" hash={4} />
        <ExpenseFeild id="Electrification" hash={4} />
        <ExpenseFeild id="Racks & storage" hash={4} />
        <ExpenseFeild id="Vehicle" hash={4} />
        <ExpenseFeild id="Software" hash={4} />
        <ExpenseFeild id="Other" hash={4} />
      </div>
      {!isDataValid.allExpenseNeededValid && (
        <p className="px-2 bg-red-50 border border-red-400 mt-4 rounded-lg py-2 text-red-800">
          Remember:Total sum should be grater than zero.
        </p>
      )}
    </>
  );
};
export default SelectAllFeild;
