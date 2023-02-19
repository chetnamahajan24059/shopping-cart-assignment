import { ApiActionTypes } from "../../../../config/redux/types";

export const RegisterActionTypes = {
  REGISTER_USER: "SABZA_BAZAR/REGISTER",
};

export const REGISTER_USER_START = `${RegisterActionTypes.REGISTER_USER}${ApiActionTypes.API_START}`;
export const REGISTER_USER_SUCCESS = `${RegisterActionTypes.REGISTER_USER}${ApiActionTypes.API_SUCCESS}`;
export const REGISTER_USER_FAILURE = `${RegisterActionTypes.REGISTER_USER}${ApiActionTypes.API_FAIL}`;
export const REGISTER_USER_CLEAR = `${RegisterActionTypes.REGISTER_USER}${ApiActionTypes.API_CLEAR}`;
