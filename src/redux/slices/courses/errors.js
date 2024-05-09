import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjectCourse: null,
  instructorCourses: null,
  updateUserDataError: null,
  createCourseError: null,
  updateCourseError: null,
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
    UPDATEUSERDATA_ERROR: (state, action) => {
      state.updateUserDataError = action.payload;
    },
    CREATECOURSE_ERROR: (state, action) => {
      state.createCourseError = action.payload;
    },
    UPDATECOURSE_ERROR: (state, action) => {
      state.updateCourseError = action.payload;
    },
  },
});

export const {
  GETSUBJECTCOURSES_ERROR,
  GETINSTRUCTORCOURSES_ERROR,
  UPDATEUSERDATA_ERROR,
  CREATECOURSE_ERROR,
  UPDATECOURSE_ERROR,
} = courseErrorsSlice.actions;

export default courseErrorsSlice.reducer;
