import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicCourses: [],
  coursesDependOnSubject: [],
  userData: null,
  subjectCourses: null,
  instructorCourses: null,
  createCourseData: null,
  updateCourseData: null,
};

const subjectCourseReducer = (state, action) => {
  return {
    ...state,
    subjectCourses: action.payload,
  };
};
const subjectCourseFailReducer = (state) => {
  return {
    ...state,
    subjectCourses: null,
  };
};

const getInstructorCoursesReducer = (state, action) => {
  return {
    ...state,
    instructorCourses: action.payload,
  };
};
const getInstructorCoursesFailReducer = (state) => {
  return {
    ...state,
    instructorCourses: null,
  };
};
const updateUserDataReducer = (state, action) => {
  return {
    ...state,
    userData: action.payload,
  };
};
const updateUserDataFailReducer = (state) => {
  return {
    ...state,
    userData: null,
  };
};
const detailCourseReducer = (state, action) => {
  return {
    ...state,
    detailCourse: action.payload,
  };
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    GETSUBJECTCOURSES_SUCCESS: subjectCourseReducer,
    GETSUBJECTCOURSES_FAIL: subjectCourseFailReducer,
    GETINSTRUCTORCOURSES_SUCCESS: getInstructorCoursesReducer,
    GETINSTRUCTORCOURSES_FAIL: getInstructorCoursesFailReducer,
    UPDATEUSERDATA_SUCCESS: updateUserDataReducer,
    UPDATEUSERDATA_FAIL: updateUserDataFailReducer,
    DETAILCOURSE_SUCCESS: detailCourseReducer,
    setPublicCourses(state, action) {
      state.publicCourses = action.payload;
    },
    setCoursesDependOnSubject(state, action) {
      state.coursesDependOnSubject = action.payload;
    },
  },
});

export const {
  GETSUBJECTCOURSES_SUCCESS,
  GETSUBJECTCOURSES_FAIL,
  GETINSTRUCTORCOURSES_SUCCESS,
  GETINSTRUCTORCOURSES_FAIL,
  UPDATEUSERDATA_SUCCESS,
  UPDATEUSERDATA_FAIL,
  setPublicCourses,
  setCoursesDependOnSubject,
} = courseSlice.actions;

export default courseSlice.reducer;
