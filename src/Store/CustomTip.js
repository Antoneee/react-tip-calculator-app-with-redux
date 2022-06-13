import { createSlice } from "@reduxjs/toolkit";

const customTipSlice = createSlice({
  name: "custom tip",
  initialState: {
    value: "",
  },
  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export default customTipSlice.reducer;
export const customTipActions = customTipSlice.actions;
