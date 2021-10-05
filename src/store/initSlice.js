import { createSlice } from "@reduxjs/toolkit";

const initSlice = createSlice({
  name: "init",
  initialState: {
    init: false,
  },
  reducers: {
    initApp: (state) => {
      state.init = true;
    },
  },
});

export default initSlice.reducer;
export const { initApp } = initSlice.actions;
