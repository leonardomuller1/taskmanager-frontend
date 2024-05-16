import React from "react";
import { createRoot } from "react-dom/client";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

// optional configuration
const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 2500,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
