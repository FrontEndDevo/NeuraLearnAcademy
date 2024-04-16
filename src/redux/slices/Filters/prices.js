import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: "",
  reducers: {
    setPrice: (state, action) => action.payload,
    resetPrice: () => "",
  },
});

export const { setPrice, resetPrice } = priceSlice.actions;
export default priceSlice.reducer;
