import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicCourses: [],
  coursesDependOnSubject: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setPublicCourses(state, action) {
      state.publicCourses = action.payload;
    },
    setCoursesDependOnSubject(state, action) {
      state.coursesDependOnSubject = action.payload;
    },
  },
});

export const { setPublicCourses, setCoursesDependOnSubject } =
  coursesSlice.actions;

export default coursesSlice.reducer;
