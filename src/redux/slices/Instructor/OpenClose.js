import { createSlice } from "@reduxjs/toolkit";

const openCloseSlice = createSlice({
  name: "openClose",
  initialState: { modalName: null, slug: null },
  reducers: {
    openModal: (state, action) => {
      state.modalName = action.payload.modalName;
      state.slug = action.payload.slug;
    },
    closeModal: (state) => {
      state.modalName = null;
      state.slug = null;
    },
  },
});

export const { openModal, closeModal } = openCloseSlice.actions;

export default openCloseSlice.reducer;
