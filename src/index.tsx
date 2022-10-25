import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./pages/Header";
import Main from "./pages/Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
);
