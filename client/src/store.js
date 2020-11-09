import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/reducers/rootReducer";
const middleware = [thunk];
const USER = JSON.parse(localStorage.getItem("user"));
const initialState = {
  auth: {
    user: USER,
  },
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
