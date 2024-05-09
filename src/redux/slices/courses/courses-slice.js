import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: null,
  subjectCourses: null,
  instructorCourses: null,
  createCourseData:null,
  updateCourseData:null,
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
const createCourseReducer = (state,action) => {
  return {
    ...state,
    createCourseData: action.payload,
  };
};
const createCourseFailReducer = (state) => {
  return {
    ...state,
    createCourseData: null,
  };
};
const updateCourseReducer = (state,action) => {
  return {
    ...state,
    updateCourseData: action.payload,
  };
};
const updateCourseFailReducer = (state) => {
  return {
    ...state,
    updateCourseData: null,
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
    CREATECOURSE_SUCCESS: createCourseReducer,
    CREATECOURSE_FAIL: createCourseFailReducer,
    UPDATECOURSE_SUCCESS: updateCourseReducer,
    UPDATECOURSE_FAIL: updateCourseFailReducer,
  },
});

export const {
  GETSUBJECTCOURSES_SUCCESS,
  GETSUBJECTCOURSES_FAIL,
  GETINSTRUCTORCOURSES_SUCCESS,
  GETINSTRUCTORCOURSES_FAIL,
  UPDATEUSERDATA_SUCCESS,
  UPDATEUSERDATA_FAIL,
  CREATECOURSE_SUCCESS,
  CREATECOURSE_FAIL,
  UPDATECOURSE_SUCCESS,
  UPDATECOURSE_FAIL,
} = courseSlice.actions;

export default courseSlice.reducer;
