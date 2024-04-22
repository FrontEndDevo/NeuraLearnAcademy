import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openCloseCreateCourse: false,
};

const OpenCloseSlice = createSlice({
  name: "open_Close",
  initialState,
  reducers: {
    // Open and close create course modal:
    openCreateCourse: (state) => {
      state.openCloseCreateCourse = true;
    },
    closeCreateCourse: (state) => {
      state.openCloseCreateCourse = false;
    },
  },
});

export const { openCreateCourse, closeCreateCourse } = OpenCloseSlice.actions;

export default OpenCloseSlice.reducer;
