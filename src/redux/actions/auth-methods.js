/* eslint-disable no-undef */
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
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

export const login = (email, password) => async () => {
  const dispatch = useDispatch();

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      `${process.env.VITE_API_URL}/auth/jwt/create/`,
      body,
      config
    );

    dispatch(LOGIN_SUCCESS({ payload: res.data }));

    dispatch(load_user());
  } catch (err) {
    dispatch(LOGIN_FAIL());
  }
};
