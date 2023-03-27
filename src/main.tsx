import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "the-new-css-reset/css/reset.css";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
