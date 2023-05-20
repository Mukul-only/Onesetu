import { createSlice } from "@reduxjs/toolkit";

const formfeildSlice = createSlice({
  name: "formfeild",
  initialState: {
    allFeildValidity: [],
    isFormValid: true,
    allFeildIsTouched: [],
    index: 0,
    needFor: "",
  },
  reducers: {
    setIsFormValid(state, action) {
      const newItem = action.payload;
      const existingItem = state.allFeildValidity.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.allFeildValidity.push({
          id: newItem.id,
          isValid: newItem.isValid,
        });
      } else {
        existingItem.isValid = newItem.isValid;
      }
      let validity = true;
      state.allFeildValidity.forEach((item) => {
        validity = validity && item.isValid;
      });

      state.isFormValid = validity;
    },
    setIsTouched(state, action) {
      const newItem = action.payload;
      const existingItem = state.allFeildIsTouched.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.allFeildIsTouched.push({
          id: newItem.id,
          isTouched: newItem.isTouched,
        });
      } else {
        existingItem.isTouched = newItem.isTouched;
      }
    },
    setIndex(state, action) {
      if (action.payload.id === 0) {
        if (state.index < 6) {
          state.index++;
        }
      } else if (action.payload.id === 1) {
        const temp = state.allFeildValidity;
        while (temp[temp.length - 1].id !== action.payload.set) {
          state.allFeildValidity.pop();
        }
        state.index = action.payload.set;
      } else if (action.payload.id === 2) {
        state.index = action.payload.set;
      }
    },
    setNeedFor(state, action) {
      state.needFor = action.payload;
    },
  },
});
export const formfeildSliceAction = formfeildSlice.actions;
export default formfeildSlice;
