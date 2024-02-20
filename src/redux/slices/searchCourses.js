import { createSlice } from "@reduxjs/toolkit";

const searchCoursesSlice = createSlice({
  name: "searchCourses",
  initialState: {
    searchKeyword: "",
  },
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const { setSearchKeyword } = searchCoursesSlice.actions;

export default searchCoursesSlice.reducer;
