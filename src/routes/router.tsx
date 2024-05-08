import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>App is running!</div>,
  },
]);

export const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
