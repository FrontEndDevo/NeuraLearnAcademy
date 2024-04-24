import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTHENTICATED_SUCCESS(state) {
      return {
        ...state,
        isAuthenticated: true,
      };
    },
    AUTHENTICATED_FAIL(state) {
      return {
        ...state,
        isAuthenticated: false,
      };
    },
    AUTH_SUCCESS(state, action) {
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: action.payload.access,
        refresh: action.payload.refresh,
      };
    },
    AUTH_FAIL(state) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
    },
    USER_LOADED_SUCCESS(state, action) {
      return {
        ...state,
        user: action.payload,
      };
    },
    USER_LOADED_FAIL(state) {
      return {
        ...state,
        user: null,
      };
    },
    ACTIVATION_STATE(state) {
      return {
        ...state,
      };
    },
  },
});

export const {
  AUTHENTICATED_SUCCESS,
  AUTH_SUCCESS,
  USER_LOADED_SUCCESS,
  AUTHENTICATED_FAIL,
  USER_LOADED_FAIL,
  AUTH_FAIL,
  ACTIVATION_STATE,
} = authSlice.actions;
export default authSlice.reducer;
