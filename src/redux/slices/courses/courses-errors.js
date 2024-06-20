import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicCoursesError: null,
  coursesDependOnSubjectError: null,
  subjectCourse: null,
  updateUserDataError: null,
  createCourseError: null,
  updateCourseError: null,
  deleteCourseError: null,
};

const coursesErrorsSlice = createSlice({
  name: "coursesErrors",
  initialState,
  reducers: {
    setPublicCoursesError(state) {
      state.publicCoursesError = "Unable to retrieve public courses.";
    },
    setCoursesDependOnSubjectError(state) {
      state.coursesDependOnSubjectError =
        "Unable to retrieve courses depending on this subject.";
    },
    resetCoursesErrors(state) {
      state.publicCoursesError = null;
      state.coursesDependOnSubjectError = null;
    },
  },
  GETSUBJECTCOURSES_ERROR: (state, action) => {
    state.subjectCourse = action.payload;
  },
  UPDATEUSERDATA_ERROR: (state, action) => {
    state.updateUserDataError = action.payload;
  },
});

export const {
  setPublicCoursesError,
  setCoursesDependOnSubjectError,
  resetCoursesErrors,
  GETSUBJECTCOURSES_ERROR,
  UPDATEUSERDATA_ERROR,
} = coursesErrorsSlice.actions;

export default coursesErrorsSlice.reducer;
