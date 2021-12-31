import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

import App from "./App";
import "antd/dist/antd.css";

reactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
