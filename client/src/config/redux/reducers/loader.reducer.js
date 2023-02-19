import { ApiActionTypes } from "../types";

export const initialLoaderState = {
  loading: false,
};

const apiReducer = (state = initialLoaderState, action) => {

  if (action.type.includes(ApiActionTypes.API_START)) {
    console.log("JJJJ");
    return {
      loading: true,
    };
  } else if (
    action.type.includes(ApiActionTypes.API_END) ||
    action.type.includes(ApiActionTypes.API_ERROR) ||
    action.type.includes(ApiActionTypes.ACCESS_DENIED) ||
    action.type.includes(ApiActionTypes.API_SUCCESS) ||
    action.type.includes(ApiActionTypes.API_FAIL)
  ) {
    return {
      loading: false,
    };
  }
  return state;
};

export default apiReducer;
