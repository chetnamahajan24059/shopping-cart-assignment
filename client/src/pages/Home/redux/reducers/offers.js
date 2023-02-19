import { GET_OFFERS_SUCCESS, GET_OFFERS_FAILURE } from "../types";

export const initialOffersState = {
  list: [],
  error: {},
};

const categoryReducer = (state = initialOffersState, action) => {
  switch (action.type) {
    case GET_OFFERS_FAILURE:
      return {
        ...initialOffersState,
        error: action.payload,
      };

    case GET_OFFERS_SUCCESS:
      return {
        ...initialOffersState,
        list: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
