import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";

import "./css/variables.css";
import "./css/responsive.css";
import "./css/index.css";
import "./css/reset.css";
import "./css/utils.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
