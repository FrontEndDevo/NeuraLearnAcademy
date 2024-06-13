import { createSlice } from "@reduxjs/toolkit";

const openCloseSlice = createSlice({
  name: "openClose",
  initialState: { modalName: null, slug: null, courseDetails: null },
  reducers: {
    openModal: (state, action) => {
      state.modalName = action.payload.modalName;
      state.slug = action.payload.slug;
      state.courseDetails = action.payload.course || null;
    },
    closeModal: (state) => {
      state.modalName = null;
      state.slug = null;
      state.courseDetails = null;
    },
  },
});

export const { openModal, closeModal } = openCloseSlice.actions;

export default openCloseSlice.reducer;
