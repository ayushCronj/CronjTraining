import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import App1 from "./App1.js";
import './index.css';

render(
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById("root")
);