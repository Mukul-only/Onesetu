import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburger-slice";
import formfeildSlice from "./formfeild-slice";
const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    formfeild: formfeildSlice.reducer,
  },
});
export default store;
