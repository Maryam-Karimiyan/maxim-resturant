import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   activeItem: JSON.parse(localStorage.getItem("menuIndex")) ?? null,
};

export const menueSlice = createSlice({
  name: "menueIndex",
  initialState,
  reducers: {
    changeIndex: (state, action) => {
      state.activeItem= action.payload;
      // ذخیره در localStorage برای اینکه بعد رفرش هم بمونه
      localStorage.setItem("menuIndex", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeIndex } = menueSlice.actions;

export default menueSlice.reducer;
