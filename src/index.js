import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Elbow from "./stretches/elbow";
import Hand from "./stretches/hand";
import Neck from "./stretches/neck";
import Shoulder from "./stretches/shoulder";
import Wrist from "./stretches/wrist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/elbow",
    element: <Elbow />,
  },
  {
    path: "/hand",
    element: <Hand />,
  },
  {
    path: "/neck",
    element: <Neck />,
  },
  {
    path: "/shoulder",
    element: <Shoulder />,
  },
  {
    path: "/wrist",
    element: <Wrist />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
