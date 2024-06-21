import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicCoursesError: null,
  coursesDependOnSubjectError: null,
  subjectCourse: null,
  updateUserDataError: null,
  createCourseError: null,
  updateCourseError: null,
  deleteCourseError: null,
  deleteSectionsError: null,
  sectionContentError: null,
  getSectionContentError: null,
  lectureDeletedError: null,
  lectureUpdatedError: null,
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

  CREATECOURSE_ERROR: (state, action) => {
    state.createCourseError = action.payload;
  },
  UPDATECOURSE_ERROR: (state, action) => {
    state.updateCourseError = action.payload;
  },
  DELETECOURSE_ERROR: (state, action) => {
    state.deleteCourseError = action.payload;
  },
  CREATECONTENT_ERROR: (state, action) => {
    state.sectionContentError = action.payload;
  },
  GETCONTENTS_ERROR: (state, action) => {
    state.getSectionContentError = action.payload;
  },
  DELETELECTURE_ERROR: (state, action) => {
    state.lectureDeletedError = action.payload;
  },
  UPDATELECTURE_ERROR: (state, action) => {
    state.lectureUpdatedError = action.payload;
  },
});

export const {
  setPublicCoursesError,
  setCoursesDependOnSubjectError,
  resetCoursesErrors,
  GETSUBJECTCOURSES_ERROR,
  UPDATEUSERDATA_ERROR,
  CREATECOURSE_ERROR,
  UPDATECOURSE_ERROR,
  DELETECOURSE_ERROR,
  DETAILCOURSE_ERROR,
  CREATECONTENT_ERROR,
  GETCONTENTS_ERROR,
  DELETELECTURE_ERROR,
  UPDATELECTURE_ERROR,
} = coursesErrorsSlice.actions;

export default coursesErrorsSlice.reducer;
