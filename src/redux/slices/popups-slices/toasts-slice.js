import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMessage: false,
  message: "",
  messageType: "", // success, error
};

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    setToastMessage: (state, action) => {
      state.showMessage = true;
      state.message = action.payload.message;
      state.messageType = action.payload.type;
    },
    hideMessage: (state) => {
      state.showMessage = false;
    },
    resetToasts: (state) => {
      state.message = "";
      state.messageType = "";
    },
  },
});

export const { setToastMessage, hideMessage, resetToasts } =
  toastsSlice.actions;

export default toastsSlice.reducer;
