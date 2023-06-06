import { createSlice } from "@reduxjs/toolkit";

const formfeildSlice = createSlice({
  name: "formfeild",
  initialState: {
    allFeildValidity: [],
    isFormValid: false,
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
    setAllTouched(state) {
      state.allFeildIsTouched.map((item) => (item.isTouched = true));
    },
    setIndex(state, action) {
      if (action.payload >= 0) {
        state.index = action.payload;
        if (action.payload === 4 || action.payload === 6) {
          if (state.allFeildValidity.length - 1 > state.index) {
            while (state.allFeildValidity.length - 1 !== 3) {
              state.allFeildValidity.pop();
            }
          }
          let validity = true;
          state.allFeildValidity.forEach((item) => {
            validity = validity && item.isValid;
          });

          state.isFormValid = validity;
        }
        if (state.allFeildValidity.length - 1 > state.index) {
          while (state.allFeildValidity.length - 1 !== state.index) {
            state.allFeildValidity.pop();
          }
        }
      } else {
        state.index++;
      }
      if (state.needFor === "working" && state.index === 4) {
        state.index = 6;
      }

      // if (action.payload.id === 0) {
      //   if (state.index < 7) {
      //     state.index++;
      //   }
      // } else if (action.payload.id === 1) {
      //   const temp = state.allFeildValidity;
      //   while (temp[temp.length - 1].id !== action.payload.set) {
      //     state.allFeildValidity.pop();
      //   }
      //   state.index = action.payload.set;
      // } else if (action.payload.id === 2) {
      //   state.index = action.payload.set;
      // }
    },

    setNeedFor(state, action) {
      state.needFor = action.payload;
      if (action.payload === "working") {
      }
    },
    setGotoEdit(state, action) {
      state.gotoEdit = action.payload;
    },
    reset(state) {
      state.allFeildValidity = [];
      state.isFormValid = true;

      state.allFeildIsTouched = [];
      state.index = 0;
      state.needFor = "";
    },
  },
});
export const formfeildSliceAction = formfeildSlice.actions;
export default formfeildSlice;
