import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CartSlice from "./Cart-Slice";
export const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    cart: CartSlice.reducer,
  },
});
