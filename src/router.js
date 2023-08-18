import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App outlet={Outlet} />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
