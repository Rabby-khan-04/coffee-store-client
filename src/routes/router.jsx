import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/Coffee/AddCoffee";
import EditCoffee from "../pages/Coffee/EditCoffee";
import Coffee from "../pages/Coffee/Coffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "edit-coffee",
        element: <EditCoffee />,
      },
      {
        path: "coffee/:id",
        element: <Coffee />,
      },
    ],
  },
]);

export default router;
