import { ApiActionTypes } from "../../../../config/redux/types";

export const LoginActionTypes = {
  LOGIN_USER: "SABZA_BAZAR/REGISTER",
};

export const LOGIN_USER_START = `${LoginActionTypes.LOGIN_USER}${ApiActionTypes.API_START}`;
export const LOGIN_USER_SUCCESS = `${LoginActionTypes.LOGIN_USER}${ApiActionTypes.API_SUCCESS}`;
export const LOGIN_USER_FAILURE = `${LoginActionTypes.LOGIN_USER}${ApiActionTypes.API_FAIL}`;
