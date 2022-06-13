import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    value: 5,
  },
  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
  },
});

export default peopleSlice.reducer;
export const peopleActions = peopleSlice.actions;
