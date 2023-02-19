import { ApiActionTypes } from "../../../../config/redux/types";

export const CategoryActionTypes = {
  GET_CATAGORY: "SABZA_BAZAR/GET_CATAGORY",
};

export const GET_CATAGORY_START = `${CategoryActionTypes.GET_CATAGORY}${ApiActionTypes.API_START}`;
export const GET_CATAGORY_SUCCESS = `${CategoryActionTypes.GET_CATAGORY}${ApiActionTypes.API_SUCCESS}`;
export const GET_CATAGORY_FAILURE = `${CategoryActionTypes.GET_CATAGORY}${ApiActionTypes.API_FAIL}`;


export const OfferActionTypes = {
    GET_OFFERS: "SABZA_BAZAR/GET_OFFERS",
  };
  
  export const GET_OFFERS_START = `${OfferActionTypes.GET_OFFERS}${ApiActionTypes.API_START}`;
  export const GET_OFFERS_SUCCESS = `${OfferActionTypes.GET_OFFERS}${ApiActionTypes.API_SUCCESS}`;
  export const GET_OFFERS_FAILURE = `${OfferActionTypes.GET_OFFERS}${ApiActionTypes.API_FAIL}`;