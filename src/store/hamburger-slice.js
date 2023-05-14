import { createSlice } from "@reduxjs/toolkit";
const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: { isActive: false },
  reducers: {
    toogleActive(state) {
      state.isActive = !state.isActive;
    },
    notActive(state) {
      state.isActive = false;
    },
  },
});
export const hamburgerAction = hamburgerSlice.actions;
export default hamburgerSlice;
