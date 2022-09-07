import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };
const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const AuthActions = AuthSlice.actions;
export default AuthSlice;
