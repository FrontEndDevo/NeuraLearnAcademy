import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: null,
  signup: null,
  authentication: null,
  activation: null,
  reset_password: null,
  reset_password_confirm: null,
};

const authErrorsSlice = createSlice({
  name: "auth_errors",
  initialState,
  reducers: {
    LOGIN_ERROR: (state, action) => {
      state.login = action.payload;
    },
    SIGNUP_ERROR: (state, action) => {
      state.signup = action.payload;
    },
    AUTHENTICATION_ERROR: (state, action) => {
      state.authentication = action.payload;
    },
    ACTIVATION_ERROR: (state, action) => {
      state.activation = action.payload;
    },
    RESET_PASSWORD_ERROR: (state, action) => {
      state.reset_password = action.payload;
    },
    RESET_PASSWORD_CONFIRM_ERROR: (state, action) => {
      state.reset_password_confirm = action.payload;
    },
    RESET: (state) => {
      state.login = null;
      state.signup = null;
      state.activation = null;
    },
  },
});

export const {
  LOGIN_ERROR,
  SIGNUP_ERROR,
  AUTHENTICATION_ERROR,
  ACTIVATION_ERROR,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_CONFIRM_ERROR,
  RESET,
} = authErrorsSlice.actions;

export default authErrorsSlice.reducer;
