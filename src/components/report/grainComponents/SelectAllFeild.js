import CostInputFeild from "./CostInputFeild";
import { useDispatch, useSelector } from "react-redux";
import { formDataAction } from "../../../store/formData-slice";
import { useEffect } from "react";
import { formfeildSliceAction } from "../../../store/formfeild-slice";
const SelectAllFeild = (props) => {
  const dispatch = useDispatch();

  const { isDataValid } = useSelector((state) => state.formdata);

  const landIsValid = (input) => {
    dispatch(formDataAction.setAllExpenseData({ name: "Land", value: input }));
    dispatch(formDataAction.setAllExpenseSum());
  };
  const shedIsValid = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({ name: "Shed/building", value: input })
    );
    dispatch(formDataAction.setAllExpenseSum());
  };
  const electronicIsValid = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({
        name: "Electronic gaget",
        value: input,
      })
    );
    dispatch(formDataAction.setAllExpenseSum());
  };
  const furnitureIsValid = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({ name: "Furniture", value: input })
    );
    dispatch(formDataAction.setAllExpenseSum());
  };
  const electrificationIsValid = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({
        name: "Electrification & electricity backup",
        value: input,
      })
    );
    dispatch(formDataAction.setAllExpenseSum());
  };
  const racksIsValid = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({
        name: "Racks & storage",
        value: input,
      })
    );
    dispatch(formDataAction.setAllExpenseSum());
  };
  const vehicleIsValid = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({ name: "Vehicle", value: input })
    );
    dispatch(formDataAction.setAllExpenseSum());
  };

  const softwareIsValid = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({
        name: "Software purchase",
        value: input,
      })
    );
    dispatch(formDataAction.setAllExpenseSum());
  };
  const otherIsValid = (input) => {
    dispatch(
      formDataAction.setAllExpenseData({
        name: "Other initial expenditure",
        value: input,
      })
    );
    dispatch(formDataAction.setAllExpenseSum());
  };
  useEffect(() => {
    if (!isDataValid) {
      dispatch(formfeildSliceAction.setIndex({ id: 2, set: 4 }));
    }
  }, [isDataValid]);
  return (
    <>
      <h1 className="text-darkBlue font-bold text-xl md:text-2xl">
        What all do you need?
      </h1>
      <p className="text-xs md:text-sm">please select all that you need.</p>
      <div className="space-y-3">
        <CostInputFeild id="Land" onValid={landIsValid} />
        <CostInputFeild id="Shed/building" onValid={shedIsValid} />
        <CostInputFeild id="Electronic gaget" onValid={electronicIsValid} />
        <CostInputFeild id="Furniture" onValid={furnitureIsValid} />
        <CostInputFeild id="Electrification" onValid={electrificationIsValid} />
        <CostInputFeild id="Racks & storage" onValid={racksIsValid} />
        <CostInputFeild id="Vehicle" onValid={vehicleIsValid} />
        <CostInputFeild id="Software" onValid={softwareIsValid} />
        <CostInputFeild id="Other" onValid={otherIsValid} />
      </div>
      {!isDataValid && (
        <p className="px-2 bg-red-50 border border-red-400 mt-4 rounded-lg py-2 text-red-800">
          Remember:Total sum should be grater than zero.
        </p>
      )}
    </>
  );
};
export default SelectAllFeild;
