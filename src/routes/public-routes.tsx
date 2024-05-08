import { Navigate, RouteObject } from "react-router-dom";
import { Home } from "../pages/home";

export const publicRoutes = (): Array<RouteObject> => [
  { path: "/home", element: <Home /> },
  { path: "/", element: <Navigate to={"/home"} replace /> },
  { path: "*", element: <Navigate to={"/home"} replace /> },
];
