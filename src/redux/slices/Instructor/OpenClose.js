import { createSlice } from "@reduxjs/toolkit";

const openCloseSlice = createSlice({
  name: "openClose",
  initialState: { modalName: null, courseDetails: null },
  reducers: {
    openModal: (state, action) => {
      state.modalName = action.payload.name;
      state.courseDetails = action.payload.course;
    },
    closeModal: (state) => {
      state.modalName = null;
      state.courseDetails = null;
    },
  },
});

export const { openModal, closeModal } = openCloseSlice.actions;

export default openCloseSlice.reducer;
