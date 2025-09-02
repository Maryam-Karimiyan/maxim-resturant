import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  initialState: JSON.parse(localStorage.getItem("cart")) ?? [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
      // ذخیره در localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existing = state.find((i) => i.id === item.id);
      let newState = state;
      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        newState = state.filter((i) => i.id !== item.id);
        // ذخیره در localStorage
        localStorage.setItem("cart", JSON.stringify(newState));
        return newState;
      }
    },
    clearCart: () => {
      localStorage.removeItem("cart"); // پاک کردن
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
