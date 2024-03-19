import { createSlice } from "@reduxjs/toolkit";

const ratingsSlice = createSlice({
  name: "ratings",
  initialState: "",
  reducers: {
    setRatings: (state, action) => action.payload,
    resetRatings: () => "",
  },
});

export const { setRatings, resetRatings } = ratingsSlice.actions;

export default ratingsSlice.reducer;
