"use client";

import { ErrorBoundary } from "react-error-boundary";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "the-new-css-reset/css/reset.css";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ShowError } from "./components/showError/ShowError.component";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary
        FallbackComponent={ShowError}
        // onReset={(details) => {
        //   // Reset the state of your app so the error doesn't happen again
        // }}
      >
        <App />
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>
);
