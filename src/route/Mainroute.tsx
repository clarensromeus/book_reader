import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import App from "../App";
import { Error } from "./Error";
import Bookroute from "./Bookroute";

export const routesFromObject = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        element: <App />,
        index: true,
      },
      {
        path: "dashboard",
        element: <Bookroute />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
