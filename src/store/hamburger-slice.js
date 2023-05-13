import { createSlice } from "@reduxjs/toolkit";
const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState: { isActive: false },
  reducers: {
    toogleActive(state) {
      state.isActive = !state.isActive;
    },
  },
});
export const hamburgerAction = hamburgerSlice.actions;
export default hamburgerSlice;
