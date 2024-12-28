import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/Coffee/AddCoffee";
import Coffee from "../pages/Coffee/Coffee";
import UpdateCoffee from "../pages/Coffee/UpdateCoffee";

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
        path: "coffee/:id",
        element: <Coffee />,
      },
      {
        path: "update-coffee/:id",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
