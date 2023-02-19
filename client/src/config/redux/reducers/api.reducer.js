import { ApiActionTypes } from "../types";

export const initialApiState = {};

const apiReducer = (state = initialApiState, action) => {
  switch (action.type) {
    case ApiActionTypes.API_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case ApiActionTypes.ACCESS_DENIED:
      return {
        ...state,
        accessDenied: action.payload,
      };

    default:
      return state;
  }
};

export default apiReducer;
