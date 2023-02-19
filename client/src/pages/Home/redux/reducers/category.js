import { GET_CATAGORY_SUCCESS, GET_CATAGORY_FAILURE } from "../types";

export const initialCategoryState = {
  list: [],
  error: {},
};

const categoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case GET_CATAGORY_FAILURE:
      return {
        ...initialCategoryState,
        error: action.payload,
      };

    case GET_CATAGORY_SUCCESS:
      return {
        ...initialCategoryState,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
