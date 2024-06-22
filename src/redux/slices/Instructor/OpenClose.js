import { createSlice } from "@reduxjs/toolkit";

const openCloseSlice = createSlice({
  name: "openClose",
  initialState: {
    modalName: null,
    slug: null,
    lecture: null,
    courseDetails: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.modalName = action.payload.modalName || null;
      state.slug = action.payload.slug || null;
      state.lecture = action.payload.lecture || null;
      state.courseDetails = action.payload.course || null;
    },
    closeModal: (state) => {
      state.modalName = null;
      state.slug = null;
      state.lecture = null;
      state.courseDetails = null;
    },
  },
});

export const { openModal, closeModal } = openCloseSlice.actions;

export default openCloseSlice.reducer;
