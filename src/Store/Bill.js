import { createSlice } from "@reduxjs/toolkit";

const billSlice = createSlice({
  name: "bill",
  initialState: { value: 142.55 },
  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export default billSlice.reducer;
export const billActions = billSlice.actions;
