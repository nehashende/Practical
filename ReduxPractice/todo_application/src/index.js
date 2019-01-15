/* import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import loggerMiddleware from "./middleware/logger";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import thunkMiddleware from "redux-thunk"; */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
//import { applyMiddleware, createStore, compose } from "redux";
import App from "./components/App";
import configureStore from "./configureStore";

const store = configureStore();

/* const mylogger = store => next => action => {
  console.log("inside function");
  console.log("will dispatch", action);
  console.log(store.getState());
  next(action);
  // This will likely be the action itself, unless
  // a middleware further in chain changed it.
};

const store = createStore(rootReducer, applyMiddleware(mylogger)); */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
