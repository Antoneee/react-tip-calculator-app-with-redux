import { configureStore } from "@reduxjs/toolkit";
import billSlice from "./Bill";
import tipSlice from "./Tip";
import customTipSlice from "./CustomTip";
import peopleSlice from "./People";
import resetSlice from "./Reset";

const store = configureStore({
  reducer: {
    bill: billSlice,
    tip: tipSlice,
    customTip: customTipSlice,
    people: peopleSlice,
    reset: resetSlice,
  },
});

export default store;
