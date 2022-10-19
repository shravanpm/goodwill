import * as types from "./actionTypes";

const initialState = {
  user: {},
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: payload.user,
        token: payload.token,
      };
    }
    case types.LOGIN_FAILURE: {
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
