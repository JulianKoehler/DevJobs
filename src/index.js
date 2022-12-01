import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ColorThemeProvider from "./store/ColorThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorThemeProvider>
      <App />
    </ColorThemeProvider>
  </React.StrictMode>
);
