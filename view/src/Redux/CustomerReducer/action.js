import axios from "axios";
import { baseUrl } from "../../util";
import * as types from "./actionTypes";

export const getCustomerInfo = (payload) => (dispatch) => {
  dispatch({ type: types.GET_CUSTOMER_INFO_REQUEST });

  return axios({
    url: baseUrl + "shopcustomer/" + payload.id,
    method: "GET",
    headers: {
      Authorization: "Bearer " + payload.token,
    },
  })
    .then((r) => {
      dispatch({ type: types.GET_CUSTOMER_INFO_SUCCESS, payload: r.data });
      console.log(r.data);
      console.log("hello");
    })
    .catch((e) => {
      console.log(e.response.data);
      if (e.response.data.message == "data not found") {
        dispatch({ type: types.GET_CUSTOMER_INFO_SUCCESS, payload: {} });
      } else {
        dispatch({ type: types.GET_CUSTOMER_INFO_FAILURE });
      }
    });
};
