import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LoginActionTypes,
} from "../types";
import { setToken } from "../../../../utils";
import { toast } from "react-toastify";

export const login =
  ({ email, password }, successCallback) =>
  (dispatch) => {
    dispatch({
      type: LoginActionTypes.LOGIN_USER,
      payload: {
        method: "POST",
        onSuccess: (data) => {
          if (data.token) {
            setToken(data.token);
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
            toast.success("User sucessfully registered!");
            successCallback();
          }
        },
        onFailure: (err) => {
          dispatch({ type: LOGIN_USER_FAILURE });
          toast.error(err);
        },
        url: "/login",
        data: {
          email,
          password,
        },
      },
    });
  };
