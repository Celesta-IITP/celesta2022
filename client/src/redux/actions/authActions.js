import Axios from "axios";
import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
} from "../actions/types";
import { returnErrors, clearErrors } from "./errorActions";
export const registerUser = (data) => async (dispatch) => {
  try {
    console.log("In auth actions");
    dispatch({
      type: USER_LOADING,
    });
    console.log(data);
    const res = await Axios.post(`/api/users/signup`, data);
    console.log("Signup successful");
    /*dispatch({
      type: USER_LOADED,
      payload: { status: res.status },
    });*/
  } catch (err) {
    console.log(err.message);
    dispatch(
      returnErrors(
        err.response.data.message,
        err.response.status,
        "REGISTER_FAIL"
      )
    );
    dispatch({ type: REGISTER_FAIL });
  }
};
export const loginUser = (user) => async (dispatch) => {
  try {
    console.log("Inside login action");

    dispatch({
      type: USER_LOADING,
    });
    const res = await Axios.post(`/api/users/signin`, user);
    console.log(res.data.data.user);
    const token = res.data.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(res.data.data.user));
    const x = JSON.parse(localStorage.getItem("user"));
    console.log(x);
    dispatch({
      type: USER_LOADED,
      payload: { user: res.data.data.user, status: res.status },
    });
  } catch (err) {
    console.log(err.message);
    dispatch(returnErrors(err.message, err.response.status, "REGISTER_FAIL"));
    dispatch({ type: REGISTER_FAIL });
  }
};
export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: LOGOUT_SUCCESS,
  });
};
export const uploadPhoto = (token, file) => async (dispatch) => {
  try {
    console.log("Inside upload Photo");
    let imageFormObj = new FormData();
    imageFormObj.append("profilephoto", file);
    dispatch({
      type: USER_LOADING,
    });
    const res = await Axios.post(
      `/api/users/profilephoto`,
      imageFormObj,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    console.log(res.data.data);
    dispatch({
      type: USER_LOADED,
      payload: { user: res.data.data, status: res.status },
    });
  } catch (e) {
    console.log(e);
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    const user = {
      email,
    };
    console.log(email);
    const res = await Axios.post(`/api/users/forgotpwd`, user);
    dispatch(clearErrors());
    console.log(res);
  } catch (err) {
    console.log(err.response.data.message);
    dispatch(
      returnErrors(
        err.response.data.message,
        err.response.status,
        "REGISTER_FAIL"
      )
    );
  }
};
export const resetPassword = (user) => async (dispatch) => {
  try {
    console.log(user);
    const res = await Axios.post(`/api/users/resetpwd`, user);
    dispatch(clearErrors());
    console.log(res);
  } catch (err) {
    //console.log(err.response.data.message);

    dispatch(
      returnErrors(err.response.data.message, err.response.status, "RESET_FAIL")
    );
  }
};
export const refreshPage = (user) => async (dispatch) => {
  try {
    console.log(user);
    dispatch({
      type: USER_LOADED,
      payload: { user: user },
    });
  } catch (e) {
    console.log(e);
  }
};
