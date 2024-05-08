import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicCourses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setPublicCourses(state, action) {
      state.publicCourses = action.payload;
    },
  },
});

export const { setPublicCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
