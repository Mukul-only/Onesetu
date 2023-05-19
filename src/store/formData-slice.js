import { createSlice } from "@reduxjs/toolkit";

const formDataSlice = createSlice({
  name: "allExpense",
  initialState: {
    allExpensedata: {},
    allExpenseSum: 0,
    mounted: false,
    isDataValid: false,
  },
  reducers: {
    setAllExpenseData(state, action) {
      const newItem = action.payload;
      state.allExpensedata[newItem.name] = newItem.value;
    },
    setAllExpenseSum(state) {
      const values = Object.values(state.allExpensedata);
      let sum = 0;
      values.forEach((element) => {
        if (element !== "") {
          sum += parseInt(element);
        }
      });

      state.allExpenseSum = sum.toFixed(2);
      if (state.allExpenseSum > 0) {
        state.isDataValid = true;
      } else {
        state.isDataValid = false;
      }
    },
    setMounted(state, action) {
      state.mounted = action.payload;
    },
    setDataValidity(state, action) {
      state.isDataValid = action.payload;
    },
    reset(state) {
      state.allExpenseSum = 0;
      state.allExpensedata = {};
      state.mounted = false;
      state.isDataValid = false;
    },
  },
});
export const formDataAction = formDataSlice.actions;
export default formDataSlice;
