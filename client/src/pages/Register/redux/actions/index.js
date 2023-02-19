import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_CLEAR,
  RegisterActionTypes,
} from "../types";
import { setToken, removeToken } from "../../../../utils";
import { toast } from "react-toastify";

export const clear = () => (dispatch) => {
  removeToken();
  dispatch({ type: REGISTER_USER_CLEAR });
};

export const register =
  ({ firstName, lastName, email, password }, successCallback) =>
  (dispatch) => {
    dispatch({
      type: RegisterActionTypes.REGISTER_USER,
      payload: {
        method: "POST",
        onSuccess: (data) => {
          if (data.token) {
            setToken(data.token);
            dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
            toast.success("User sucessfully registered!");
            successCallback();
          }
        },
        onFailure: (err) => {
          dispatch({ type: REGISTER_USER_FAILURE });
          toast.error(err);
        },
        url: "/register",
        data: {
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        },
      },
    });
  };
