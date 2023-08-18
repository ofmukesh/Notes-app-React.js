import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import "./index.css";
import "./App.css";
import routers from "./router";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App outlet={Outlet} />,
    children: routers,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
