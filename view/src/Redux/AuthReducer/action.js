import axios from "axios";
import { baseUrl } from "../../util";
import * as types from "./actionTypes";

export const loginRequest = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    url: baseUrl + "login",
    method: "POST",
    data: payload,
  })
    .then((r) => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: r.data,
      });
      console.log(r.data);
    })
    .catch((e) => {
      dispatch({
        type: types.LOGIN_FAILURE,
      });
      return false;
    });
};

export const signupRequest = (payload) => (dispatch) => {
  return axios({
    url: baseUrl + "register",
    method: "POST",
    data: payload,
  })
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => {
      return false;
    });
};
