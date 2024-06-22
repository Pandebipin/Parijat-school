import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    clearData: (state, action) => {
      state.data = [];
    },
  },
});

export const { addData, clearData } = financeSlice.actions;
export const selectfinance = (state) => state.finance.data;
export default financeSlice.reducer;
