import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";

const root = document.getElementById("root");

const appRoot = createRoot(root);

appRoot.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
    </Routes>
    <ToastContainer
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={true}
      closeButton={false}
      theme="colored"
      icon={false}
    />
  </BrowserRouter>
);
