import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: true, // Initial state as a boolean
  reducers: {
    themeToggle: (state) => !state // Return the toggled state directly
  }
});

export const { themeToggle } = themeSlice.actions;
export default themeSlice.reducer;