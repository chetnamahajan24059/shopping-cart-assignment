import { ApiActionTypes } from "../types";

export const apiStart = (label, payload = null) => ({
  type: `${label}${ApiActionTypes.API_START}`,
  payload,
});

export const apiEnd = (label, payload = null) => ({
  type: `${label}${ApiActionTypes.API_END}`,
  payload,
});

export const apiSuccess = (label, payload = null) => ({
  type: `${label}${ApiActionTypes.API_SUCCESS}`,
  payload,
});

export const apiError = (label, error) => ({
  type: `${label}${ApiActionTypes.API_FAIL}`,
  payload: error,
});

export const accessDenied = (payload = null) => ({
  type: ApiActionTypes.ACCESS_DENIED,
  payload: JSON.stringify(payload),
});
