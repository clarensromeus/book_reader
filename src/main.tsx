import React from "react";
import ReactDOM from "react-dom/client";
import { routesFromObject } from "./route/Mainroute.tsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routesFromObject} />
  </React.StrictMode>
);
