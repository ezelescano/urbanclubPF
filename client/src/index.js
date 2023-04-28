import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//import store from "./redux/store";
import axios from "axios";
import store from './redux2/store2'

axios.defaults.baseURL = 'http://localhost:3001';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
