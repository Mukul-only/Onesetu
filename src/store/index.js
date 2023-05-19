import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburger-slice";
import formfeildSlice from "./formfeild-slice";
import formDataSlice from "./formData-slice";
const store = configureStore({
  reducer: {
    hamburger: hamburgerSlice.reducer,
    formfeild: formfeildSlice.reducer,
    formdata: formDataSlice.reducer,
  },
});
export default store;
