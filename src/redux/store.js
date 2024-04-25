import { configureStore } from "@reduxjs/toolkit";
import searchCoursesReducer from "./slices/searchCourses";
import ratingsSlice from "./slices/Filters/ratings";
import priceSlice from "./slices/Filters/prices";
import topicSlice from "./slices/Filters/topics";
import OpenCloseSlice from "./slices/Instructor/OpenClose";
import authSlice from "./slices/authentication/auth";
import authErrorsSlice from "./slices/authentication/errors";
export const store = configureStore({
  reducer: {
    searchCourses: searchCoursesReducer,
    ratings: ratingsSlice,
    prices: priceSlice,
    topics: topicSlice,
    openClose: OpenCloseSlice,
    userAuth: authSlice,
    authErrors: authErrorsSlice,
  },
});
