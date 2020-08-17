import React from "react";
import ReactDOM from "react-dom";
import { Proviver } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.render(
  <Proviver store={store}>
    <App />
  </Proviver>,
  document.getElementById("root")
);
