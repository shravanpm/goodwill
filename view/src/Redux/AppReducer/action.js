import * as types from "./actionTypes";
import axios from "axios";
import { baseUrl } from "../../util";

export const getCustomers = (payload) => (dispatch) => {
  dispatch({ type: types.GET_CUSTOMERS_REQUEST });
  return axios({
    url: baseUrl + "shop",
    method: "GET",
    headers: {
      Authorization: "Bearer " + payload.token,
    },
    params: payload.params,
  })
    .then((r) => {
      dispatch({
        type: types.GET_CUSTOMERS_SUCCESS,
        payload: r.data.result,
      });
      console.log("customers", r.data);
    })
    .catch((e) => {
      dispatch({ type: types.GET_CUSTOMERS_FAILURE });
    });
};

export const getLatestTasks = (payload) => (dispatch) => {
  dispatch({ type: types.GET_TASKS_REQUEST });
  return axios({
    url: baseUrl + "task",
    method: "GET",
    headers: {
      Authorization: "Bearer " + payload.token,
    },
  })
    .then((r) => {
      dispatch({
        type: types.GET_TASKS_SUCCESS,
        payload: r.data,
      });
      let res = [];
      r.data.data.forEach((item) => {
        let obj = {};
        for (let key in item) {
          if (item[key].qty !== 0 && item[key].qty !== undefined) {
            obj[key] = item[key];
          }
        }
        obj.total = item.total;
        obj.paid = item.paid;
        obj.discount = item.discount;
        obj.completed = item.completed;
        obj.item_code = obj.item_code;
        res.push(obj);
      });
      console.log("res", res);
    })
    .catch((e) => {
      dispatch({ type: types.GET_TASKS_FAILURE });
    });
};

export const createTask = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_TASKS_REQUEST });
  return axios({
    url: baseUrl + "task/",
    method: "POST",
    headers: {
      Authorization: "Bearer " + payload.token,
    },
  })
    .then((r) => {
      dispatch({ type: types.CREATE_TASKS_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.CREATE_TASKS_FAILURE });
    });
};

export const createCustomerProfile = (payload) => (dispatch) => {
  return axios({
    url: baseUrl + "shop",
    method: "POST",
    data: payload.data,
    headers: {
      Authorization: "Bearer " + payload.token,
    },
  })
    .then((r) => {
      console.log(r.data);
    })
    .catch((e) => {});
};
