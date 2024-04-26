/* eslint-disable no-undef */
import axios from "axios";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  LOGOUT,
} from "../slices/authentication/auth";

import {
  LOGIN_ERROR,
  SIGNUP_ERROR,
  AUTHENTICATION_ERROR,
  ACTIVATION_ERROR,
  RESET,
} from "../slices/authentication/errors";

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
  const access = localStorage.getItem("access");
  // Check for the token in the local storage.
  if (access) {
    // Prepare the request headers and body for the API call to the backend.
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: access });

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

    dispatch(LOGIN_SUCCESS(res.data));
    dispatch(RESET());
    // Load the user information after logging in.
    load_user(dispatch);
  } catch (err) {
    dispatch(LOGIN_FAIL());
    dispatch(LOGIN_ERROR(err.response.data));
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

    dispatch(SIGNUP_SUCCESS(res.data));
    dispatch(RESET());
  } catch (err) {
    dispatch(SIGNUP_FAIL());
    dispatch(SIGNUP_ERROR(err.response.data));
    // console.log(err);
    // console.log(err.response.data);
    // console.log(err.response.data.first_name[0]);
    // console.log(err.response.data.last_name[0]);
    // console.log(err.response.data.email[0]);
    // console.log(err.response.data.non_field_errors[0]);
    // console.log(err.response.data.password[0]);
  }
}

// Send vertification mail to the user to activate the account.
export async function activation(dispatch, uid, token) {
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

    dispatch(ACTIVATION_SUCCESS());
    dispatch(RESET());
  } catch (err) {
    dispatch(ACTIVATION_FAIL());
    console.log(err);
    ACTIVATION_ERROR(err.response.data);
    // console.log(err.response.data.uid[0])
    // console.log(err.response.data.token[0])
  }
}

// Send a request to the backend to reset the password.
export async function reset_password(dispatch, email) {
  // Prepare the request headers and body for the API call to the backend.
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    await axios.post(
      `http://localhost:8000/auth/users/reset_password/`,
      body,
      config
    );

    dispatch(PASSWORD_RESET_SUCCESS());
    dispatch(RESET());
  } catch (err) {
    dispatch(PASSWORD_RESET_FAIL());
    console.log(err);
    console.log(err.response.data);
    // console.log(err.response.data.email[0]);
  }
}

// Send a request to the backend to confirm the password reset.
export async function reset_password_confirm(
  dispatch,
  uid,
  token,
  new_password,
  re_new_password
) {
  // Prepare the request headers and body for the API call to the backend.
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token, new_password, re_new_password });

  try {
    await axios.post(
      `http://localhost:8000/auth/users/reset_password_confirm/`,
      body,
      config
    );

    dispatch(PASSWORD_RESET_CONFIRM_SUCCESS());
    dispatch(RESET());
  } catch (err) {
    dispatch(PASSWORD_RESET_CONFIRM_FAIL());
    console.log(err);
    console.log(err.response.data);
    // console.log(err.response.data.new_password[0]);
  }
}

// Log out the user by removing the token from the local storage and setting the user to null.
export async function logout(dispatch) {
  dispatch(LOGOUT());
}
