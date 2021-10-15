import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
