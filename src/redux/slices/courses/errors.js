import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjectCourse: null,
  instructorCourses: null,
};

const courseErrorsSlice = createSlice({
  name: "course_errors",
  initialState,
  reducers: {
    GETSUBJECTCOURSES_ERROR: (state, action) => {
      state.subjectCourse = action.payload;
    },
    GETINSTRUCTORCOURSES_ERROR: (state, action) => {
      state.instructorCourses = action.payload;
    },
  },
});

export const {
  GETSUBJECTCOURSES_ERROR,
  GETINSTRUCTORCOURSES_ERROR,
} = courseErrorsSlice.actions;

export default courseErrorsSlice.reducer;
