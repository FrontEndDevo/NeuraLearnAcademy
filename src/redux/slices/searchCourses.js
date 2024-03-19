import { createSlice } from "@reduxjs/toolkit";

const searchCoursesSlice = createSlice({
  name: "searchCourses",
  initialState: {
    searchKeyword: "",
  },
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload.trim();
    },
    resetSearchKeyword: (state) => {
      state.searchKeyword = "";
    },
  },
});

export const { setSearchKeyword, resetSearchKeyword } =
  searchCoursesSlice.actions;

export default searchCoursesSlice.reducer;
