import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/main.scss";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

import reportWebVitals from "./reportWebVitals";

import ThemeContext from "./contexts/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContext.Provider value="dark">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
