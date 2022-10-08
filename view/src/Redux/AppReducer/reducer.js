import * as types from "./actionTypes";

const loadData = (key) => {
  try {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (error) {
    return "";
  }
};

const saveData = (key, data = "") => {
  localStorage.setItem(key, JSON.stringify(data));
};

const initialState = loadData("") || {};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
