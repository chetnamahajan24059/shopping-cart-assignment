import {
  GET_CATAGORY_FAILURE,
  GET_CATAGORY_SUCCESS,
  CategoryActionTypes,
} from "../types";
import { toast } from "react-toastify";

export const getCategory = () => (dispatch) => {
  dispatch({
    type: CategoryActionTypes.GET_CATAGORY,
    payload: {
      method: "GET",
      onSuccess: (data) => {
        dispatch({ type: GET_CATAGORY_SUCCESS, payload: data });
      },
      onFailure: (err) => {
        dispatch({ type: GET_CATAGORY_FAILURE });
        toast.error(err);
      },
      url: "/categories",
    },
  });
};
