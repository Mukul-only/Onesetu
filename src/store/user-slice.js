import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    authMethod: "signup",
    signup: {},
    login: {},
  },
  reducers: {
    setSignup(state, action) {
      state.signup[action.payload.label] = action.payload.value;
    },
    setLogin(state, action) {
      state.login[action.payload.label] = action.payload.value;
    },
    setAuthMethod(state, action) {
      state.authMethod = action.payload;
    },
    reset(state) {
      state.authMethod = "signup";
      state.signup = {};
      state.login = {};
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice;
