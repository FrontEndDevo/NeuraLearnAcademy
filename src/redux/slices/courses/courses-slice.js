import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  subjectCourses: null,
  instructorCourses: null,
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

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    GETSUBJECTCOURSES_SUCCESS: subjectCourseReducer,
    GETSUBJECTCOURSES_FAIL: subjectCourseFailReducer,
    GETINSTRUCTORCOURSES_SUCCESS: getInstructorCoursesReducer,
    GETINSTRUCTORCOURSES_FAIL: getInstructorCoursesFailReducer,
  },
});

export const {
  GETSUBJECTCOURSES_SUCCESS,
  GETSUBJECTCOURSES_FAIL,
  GETINSTRUCTORCOURSES_SUCCESS,
  GETINSTRUCTORCOURSES_FAIL,
} = courseSlice.actions;

export default courseSlice.reducer;
