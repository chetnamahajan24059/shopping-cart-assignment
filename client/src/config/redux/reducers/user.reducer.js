import { getToken } from "../../../utils";
import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_CLEAR,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
} from ".././../../pages";

export const initialUserState = {
  data: {
    token: getToken(),
  },
  error: {},
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case REGISTER_USER_FAILURE:
    case LOGIN_USER_FAILURE:
      return {
        ...initialUserState,
        error: action.payload,
      };

    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      return {
        ...initialUserState,
        data: action.payload,
      };

    case REGISTER_USER_CLEAR:
      return {
        data: {},
        error: {},
      };

    default:
      return state;
  }
};

export default userReducer;
