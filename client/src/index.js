import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Colocar el respectivo  import { Provider } from "react-redux"; Más el <Provider store={store}> Agrupando a BrowserRouter
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
