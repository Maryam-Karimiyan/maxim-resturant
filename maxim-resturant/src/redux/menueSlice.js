import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeItem: null,
};

export const menueSlice = createSlice({
  name: "menueIndex",
  initialState,
  reducers: {
    changeIndex: (state, action) => {
      state.activeItem= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeIndex } = menueSlice.actions;

export default menueSlice.reducer;
