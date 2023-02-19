import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import apiMiddleware from "../middleware/api.middleware";
import rootReducer, { initialAppState } from "../reducers";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const configureStore = (preloadedState = initialAppState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, apiMiddleware()))
  );

  return store;
};

export default configureStore;
