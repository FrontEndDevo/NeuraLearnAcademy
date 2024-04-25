import { createSlice } from "@reduxjs/toolkit";

const openCloseSlice = createSlice({
  name: "openClose",
  initialState: { modalName: null },
  reducers: {
    openModal: (state, action) => {
      state.modalName = action.payload;
    },
    closeModal: (state) => {
      state.modalName = null;
    },
  },
});

export const { openModal, closeModal } = openCloseSlice.actions;

export default openCloseSlice.reducer;
