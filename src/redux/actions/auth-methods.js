/* eslint-disable no-undef */
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
} from "../slices/authentication/auth";

export const load_user = () => async () => {
  const dispatch = useDispatch();
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.VITE_APP_API_URL}/auth/users/me/`,
        config
      );

      dispatch(USER_LOADED_SUCCESS({ payload: res.data }));
    } catch (err) {
      dispatch(USER_LOADED_FAIL());
    }
  } else {
    dispatch(USER_LOADED_FAIL());
  }
};

export async function login  (dispatch,email, password){
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      `${process.env.VITE_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );

    dispatch(AUTH_SUCCESS({ payload: res.data }));
    dispatch(load_user());
  } catch (err) {
    dispatch(AUTH_FAIL());
  }
}

export async function signup(
  dispatch,
  first_name,
  last_name,
  email,
  password,
  re_password
) {
  // const dispatch = useDispatch();
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
    // console.log(body);
    const res = await axios.post(
      `http://localhost:8000/auth/users/`,
      body,
      config
    );

    // console.log(`${process.env.VITE_API_URL}/auth/users/`);

    dispatch(AUTH_SUCCESS({ payload: res.data }));
  } catch (err) {
    dispatch(AUTH_FAIL());
    console.log(err);
  }
}
