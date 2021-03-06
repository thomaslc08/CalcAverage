import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DarkModeContextProvider } from "./store/darkModeContext";
import { GradesContextProvider } from "./store/gradesContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <GradesContextProvider>
        <App />
      </GradesContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals( ))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
