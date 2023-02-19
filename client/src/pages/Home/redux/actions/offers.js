import {
    GET_OFFERS_FAILURE,
    GET_OFFERS_SUCCESS,
    OfferActionTypes,
  } from "../types";
  import { toast } from "react-toastify";
  
  export const getOffers = () => (dispatch) => {
    dispatch({
      type: OfferActionTypes.GET_OFFERS,
      payload: {
        method: "GET",
        onSuccess: (data) => {
          dispatch({ type: GET_OFFERS_SUCCESS, payload: data });
        },
        onFailure: (err) => {
          dispatch({ type: GET_OFFERS_FAILURE });
          toast.error(err);
        },
        url: "/offers",
      },
    });
  };
  