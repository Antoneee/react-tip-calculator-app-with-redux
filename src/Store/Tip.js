import { createSlice } from "@reduxjs/toolkit";

const tipSlice = createSlice({
  name: "tip",
  initialState: { value: 15 },
  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export default tipSlice.reducer;
export const tipActions = tipSlice.actions;
