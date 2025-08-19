import { configureStore } from "@reduxjs/toolkit";
import menueReducer from "./menueSlice";
import cartReducer from "./cartSlice"
export const store = configureStore({
  reducer: {
    menueIndex: menueReducer,
    cart: cartReducer,
  },
});
