import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchCoursesReducer from "./slices/searchCourses";
import ratingsSlice from "./slices/Filters/ratings";
import priceSlice from "./slices/Filters/prices";
import topicSlice from "./slices/Filters/topics";
import OpenCloseSlice from "./slices/Instructor/OpenClose";
import authSlice from "./slices/authentication/auth";
import authErrorsSlice from "./slices/authentication/errors";
import coursesSlice from "./slices/courses/courses-slice";
import coursesErrorsSlice from "./slices/courses/courses-errors";
import spinnerSlice from "./slices/popups-slices/spinner-slice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  searchCourses: searchCoursesReducer,
  ratings: ratingsSlice,
  prices: priceSlice,
  topics: topicSlice,
  openClose: OpenCloseSlice,
  userAuth: authSlice,
  authErrors: authErrorsSlice,
  courses: coursesSlice,
  coursesErrors: coursesErrorsSlice,
  spinner: spinnerSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
