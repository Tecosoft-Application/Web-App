import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    bookDemoOpen: false,
  },
  reducers: {
    openBookDemo: (state) => {
      state.bookDemoOpen = true;
    },
    closeBookDemo: (state) => {
      state.bookDemoOpen = false;
    },
  },
});

export const { openBookDemo, closeBookDemo } = uiSlice.actions;
export default uiSlice.reducer;
