/* eslint-disable no-undef */
import axios from "axios";
import {
  ACTIVATION_STATE,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTH_FAIL,
  AUTH_SUCCESS,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
} from "../slices/authentication/auth";

// Load the user information from the backend.
export async function load_user(dispatch) {
  // Check if the token is in the local storage.
  if (localStorage.getItem("access")) {
    // Prepare the request headers for the API call to the backend.
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      // Send a request to the backend to get the user information.
      const res = await axios.get(
        `http://localhost:8000/auth/users/me/`,
        config
      );

      dispatch(USER_LOADED_SUCCESS(res.data));
    } catch (err) {
      dispatch(USER_LOADED_FAIL());
    }
  } else {
    dispatch(USER_LOADED_FAIL());
  }
}

// Check if the user is authenticated by checking the token in the local storage.
export async function checkAuthenticated(dispatch) {
  // Check for the token in the local storage.
  if (localStorage.getItem("access")) {
    // Prepare the request headers and body for the API call to the backend.
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("access") });

    try {
      const res = await axios.post(
        `http://localhost:8000/auth/jwt/verify/`,
        body,
        config
      );

      if (res.data.code !== "token_not_valid") {
        dispatch(AUTHENTICATED_SUCCESS());
      } else {
        dispatch(AUTHENTICATED_FAIL());
      }
    } catch (err) {
      dispatch(AUTHENTICATED_FAIL());
    }
  } else {
    dispatch(AUTHENTICATED_FAIL());
  }
}

// Send a request to the backend to log in the user.
export async function login(dispatch, email, password) {
  // Prepare the request headers and body for the API call to the backend.
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      `http://localhost:8000/auth/jwt/create/`,
      body,
      config
    );

    dispatch(AUTH_SUCCESS(res.data));
    load_user(dispatch);
  } catch (err) {
    dispatch(AUTH_FAIL());
  }
}

// Send a request to the backend to create a new user.
export async function signup(
  dispatch,
  first_name,
  last_name,
  email,
  password,
  re_password
) {
  // Prepare the request headers and body for the API call to the backend.
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    first_name,
    last_name,
    email,
    password,
    re_password,
  });

  try {
    const res = await axios.post(
      `http://localhost:8000/auth/users/`,
      body,
      config
    );

    dispatch(AUTH_SUCCESS(res.data));
  } catch (err) {
    dispatch(AUTH_FAIL());
  }
}

export async function verify(dispatch, uid, token) {
  // Prepare the request headers and body for the API call to the backend.
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token });

  try {
    await axios.post(
      `http://localhost:8000/auth/users/activation/`,
      body,
      config
    );

    dispatch(ACTIVATION_STATE());
  } catch (err) {
    dispatch(ACTIVATION_STATE());
  }
}
