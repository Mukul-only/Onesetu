import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "allExpense",
  initialState: {
    allExpensedata: { allExpenseNeeded: {}, monthlyExpense: {} },
    allExpenseSum: { allExpenseNeededSum: 0, monthlyExpenseSum: 0 },
    mounted: { allExpenseNeededMounted: false, monthlyExpenseMounted: false },
    isDataValid: { allExpenseNeededValid: false, monthlyExpenseValid: false },
    isFormDataValid: false,
  },
  reducers: {
    setAllExpenseData(state, action) {
      const newItem = action.payload;
      if (newItem.id === 4) {
        state.allExpensedata.allExpenseNeeded[newItem.name] = newItem.value;
      } else if (newItem.id === 6) {
        state.allExpensedata.monthlyExpense[newItem.name] = newItem.value;
      }
    },
    setAllExpenseSum(state, action) {
      if (action.payload === 4) {
        const values = Object.values(state.allExpensedata.allExpenseNeeded);
        let sum = 0;
        values.forEach((element) => {
          if (element !== "") {
            sum += parseInt(element);
          }
        });
        state.allExpenseSum.allExpenseNeededSum = sum.toFixed(2);
        if (state.allExpenseSum.allExpenseNeededSum > 0) {
          state.isDataValid.allExpenseNeededValid = true;
        } else {
          state.isDataValid.allExpenseNeededValid = false;
        }
      }
      if (action.payload === 6) {
        const values = Object.values(state.allExpensedata.monthlyExpense);
        let sum = 0;
        values.forEach((element) => {
          if (element !== "") {
            sum += parseInt(element);
          }
        });
        state.allExpenseSum.monthlyExpenseSum = sum.toFixed(2);
        if (state.allExpenseSum.monthlyExpenseSum > 0) {
          state.isDataValid.monthlyExpenseValid = true;
        } else {
          state.isDataValid.monthlyExpenseValid = false;
        }
      }

      state.isFormDataValid =
        (state.mounted.allExpenseNeededMounted
          ? state.isDataValid.allExpenseNeededValid
          : true) && state.isDataValid.monthlyExpenseValid;
    },
    setMounted(state, action) {
      if (action.payload.id === 4) {
        state.mounted.allExpenseNeededMounted = action.payload.isMounted;
      } else if (action.payload.id === 6) {
        state.mounted.monthlyExpenseMounted = action.payload.isMounted;
      }
    },

    reset(state, action) {
      if (action.payload === 4) {
        state.allExpenseSum.allExpenseNeededSum = 0;
        state.allExpensedata.allExpenseNeeded = {};
        state.mounted.allExpenseNeededMounted = false;
        state.isDataValid.allExpenseNeededValid = false;
      } else if (action.payload === 6) {
        state.allExpenseSum.monthlyExpenseSum = 0;
        state.allExpensedata.monthlyExpense = {};
        state.mounted.monthlyExpenseMounted = false;
        state.isDataValid.monthlyExpenseValid = false;
      }
    },
  },
});
export const formDataAction = formDataSlice.actions;
export default formDataSlice;
