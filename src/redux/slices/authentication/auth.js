import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
};

const authenticationSuccessReducer = (state) => {
  return {
    ...state,
    isAuthenticated: true,
  };
};

const authenticationFailReducer = (state) => {
  return {
    ...state,
    isAuthenticated: false,
  };
};

const registrationSuccessReducer = (state, action) => {
  localStorage.setItem("access", action.payload.access);
  localStorage.setItem("refresh", action.payload.refresh);
  return {
    ...state,
    access: action.payload.access,
    refresh: action.payload.refresh,
  };
};

const registrationFailReducer = (state) => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
  return {
    ...state,
    access: null,
    refresh: null,
    isAuthenticated: false,
    user: null,
  };
};

const loadUserSuccessReducer = (state, action) => {
  return {
    ...state,
    user: action.payload,
  };
};

const loadUserFailReducer = (state) => {
  return {
    ...state,
    user: null,
  };
};

const activateAccountReducer = (state) => {
  return {
    ...state,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SIGNUP_SUCCESS: authenticationFailReducer,
    SIGNUP_FAIL: registrationFailReducer,
    ACTIVATION_SUCCESS: activateAccountReducer,
    ACTIVATION_FAIL: activateAccountReducer,
    LOGIN_SUCCESS: registrationSuccessReducer,
    LOGIN_FAIL: registrationFailReducer,
    AUTHENTICATED_SUCCESS: authenticationSuccessReducer,
    AUTHENTICATED_FAIL: authenticationFailReducer,
    USER_LOADED_SUCCESS: loadUserSuccessReducer,
    USER_LOADED_FAIL: loadUserFailReducer,
    LOGOUT: registrationFailReducer,
  },
});

export const {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  LOGOUT,
} = authSlice.actions;
export default authSlice.reducer;
