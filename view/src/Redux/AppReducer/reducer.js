import { loadData } from "../../util";
import * as types from "./actionTypes";

const initialState = {
  customers: [],
  tasks: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_CUSTOMERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        customers: payload,
      };
    }
    case types.GET_CUSTOMERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default:
      return state;
  }
};
