import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburger-slice";
const store = configureStore({
  reducer: { hamburger: hamburgerSlice.reducer },
});
export default store;
