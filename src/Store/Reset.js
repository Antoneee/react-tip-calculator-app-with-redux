import { createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
  name: "reset",
  initialState: {
    value: true,
  },
  reducers: {
    enable(state) {
      state.value = true;
    },
    disable(state) {
      state.value = false;
    },
  },
});

export default resetSlice.reducer;
export const resetActions = resetSlice.actions;
