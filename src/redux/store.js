import { configureStore } from "@reduxjs/toolkit";
import searchCoursesReducer from "./slices/searchCourses";
import authSlice from "./slices/authentication/auth";
export const store = configureStore({
  reducer: {
    searchCourses: searchCoursesReducer,
    userAuth: authSlice,
  },
});
