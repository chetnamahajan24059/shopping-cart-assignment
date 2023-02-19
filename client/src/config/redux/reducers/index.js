import { combineReducers } from "redux";
import apiReducer, { initialApiState } from "./api.reducer";
import userReducer, { initialUserState } from "./user.reducer";
import loaderReducer, { initialLoaderState } from "./loader.reducer";
import {
  categoryReducer,
  initialCategoryState,
  offersReducer,
  initialOffersState,
} from "../../../pages";

export const initialAppState = {
  api: initialApiState,
  user: initialUserState,
  loader: initialLoaderState,
  category: initialCategoryState,
  offers: initialOffersState,
};

const rootReducer = combineReducers({
  api: apiReducer,
  user: userReducer,
  loader: loaderReducer,
  category: categoryReducer,
  offers: offersReducer,
});

export default rootReducer;
