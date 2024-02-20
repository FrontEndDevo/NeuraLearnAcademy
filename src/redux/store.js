import { configureStore } from "@reduxjs/toolkit";
import searchCoursesReducer from "./slices/searchCourses";
export const store = configureStore({
  reducer: {
    searchCourses: searchCoursesReducer,
  },
});
