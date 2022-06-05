import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { App } from "./App";
import "./index.css";

const rootElement = document.getElementById("app");
const initialState = {
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrease":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  );
}
