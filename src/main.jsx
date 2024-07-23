import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main/apps/app.jsx";
import "./main/style/color.css";
import "./main/style/components.css";
import "./main/style/form.css";
import "./main/style/frameworks.css";
import "./main/style/index.css";
import "./main/style/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
