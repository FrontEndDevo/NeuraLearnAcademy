import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicCoursesError: null,
};

const coursesErrorsSlice = createSlice({
  name: "coursesErrors",
  initialState,
  reducers: {
    setPublicCoursesError(state) {
      state.publicCoursesError = "Unable to retrieve public courses.";
    },
  },
});

export const { setPublicCoursesError } = coursesErrorsSlice.actions;

export default coursesErrorsSlice.reducer;
