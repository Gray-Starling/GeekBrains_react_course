import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/configureStore";
import { App } from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById("app");

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
