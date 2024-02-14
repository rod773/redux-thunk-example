import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
