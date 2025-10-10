import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Pages/Root/Root";
import Error404Page from "./Pages/Error404Page/Error404Page";
import Home from "./Pages/Home/Home";
import Installation from "./Pages/Installation/Installation";
import AllApps from "./Pages/AllApps/AllApps";
import AppDetails from "./Pages/AppDetails/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404Page></Error404Page>,
    children: [
      {
        index: true,
        loader: () => fetch("/allAppsData.json"),
        Component: Home,
      },
      {
        path: "/all-apps",
        loader: () => fetch("/allAppsData.json"),
        Component: AllApps,
      },
      {
        path: "/installed",
        element: <Installation></Installation>,
      },
      {
        path: "app-details/:id",
        loader: () => fetch("/allAppsData.json"),
        element: <AppDetails></AppDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
