import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subjectCourse: null,
  instructorCourses: null,
  updateUserDataError: null,
  createCourseError: null,
  updateCourseError: null,
  deleteCourseError: null,
  detailCourseError: null,
  createSectionError: null,
  getSectionsError: null,
  deleteSectionsError: null,
  updateSectionError: null,
  sectionContentError: null,
  getSectionContentError: null,
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
    DELETECOURSE_ERROR: (state, action) => {
      state.deleteCourseError = action.payload;
    },
    DETAILCOURSE_ERROR: (state, action) => {
      state.detailCourseError = action.payload;
    },
    CREATESECTION_ERROR: (state, action) => {
      state.createSectionError = action.payload;
    },
    GETSECTIONS_ERROR: (state, action) => {
      state.getSectionsError = action.payload;
    },
    DELETESECTION_ERROR: (state, action) => {
      state.deleteSectionsError = action.payload;
    },
    UPDATESECTION_ERROR: (state, action) => {
      state.updateSectionError = action.payload;
    },
    CREATECONTENT_ERROR: (state, action) => {
      state.sectionContentError = action.payload;
    },
    GETCONTENTS_ERROR: (state, action) => {
      state.getSectionContentError = action.payload;
    },
  },
});

export const {
  GETSUBJECTCOURSES_ERROR,
  GETINSTRUCTORCOURSES_ERROR,
  UPDATEUSERDATA_ERROR,
  CREATECOURSE_ERROR,
  UPDATECOURSE_ERROR,
  DELETECOURSE_ERROR,
  DETAILCOURSE_ERROR,
  CREATESECTION_ERROR,
  GETSECTIONS_ERROR,
  DELETESECTION_ERROR,
  UPDATESECTION_ERROR,
  CREATECONTENT_ERROR,
  GETCONTENTS_ERROR,
} = courseErrorsSlice.actions;

export default courseErrorsSlice.reducer;
