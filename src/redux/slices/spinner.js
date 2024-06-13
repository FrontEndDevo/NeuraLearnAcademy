import { createSlice } from "@reduxjs/toolkit";

const spinnerSlice = createSlice({
  name: "spinner",
  initialState: {
    isSpinnerLoading: false,
  },
  reducers: {
    setIsSpinnerLoading: (state, action) => {
      state.isSpinnerLoading = action.payload;
    },
  },
});

export const { setIsSpinnerLoading } = spinnerSlice.actions;

export default spinnerSlice.reducer;
