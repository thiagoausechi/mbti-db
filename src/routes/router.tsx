import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./public-routes";

export const Router: React.FC = () => {
  return <RouterProvider router={createBrowserRouter([...publicRoutes()])} />;
};
