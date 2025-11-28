import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GroupsProvider } from "./context/GroupsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GroupsProvider>
    <App />
  </GroupsProvider>
);
