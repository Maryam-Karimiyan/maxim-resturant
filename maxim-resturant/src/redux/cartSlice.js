import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      const existing = state.find((i) => i.id === item.id);

      if (existing.quantity>1) {
        existing.quantity -= 1;
      } else {
        return state.filter(i => i.id !== item.id);
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
