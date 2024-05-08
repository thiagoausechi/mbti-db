import { Home } from "@/pages";
import { Navigate, RouteObject } from "react-router-dom";

export const publicRoutes = (): Array<RouteObject> => [
  { path: "/home", element: <Home /> },
  { path: "/", element: <Navigate to={"/home"} replace /> },
  { path: "*", element: <Navigate to={"/home"} replace /> },
];
