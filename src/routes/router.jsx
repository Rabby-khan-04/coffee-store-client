import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/Coffee/AddCoffee";
import Coffee from "../pages/Coffee/Coffee";
import UpdateCoffee from "../pages/Coffee/UpdateCoffee";
import axios from "axios";
import SignUp from "../pages/Auth/SignUp";
import Login from "../pages/Auth/Login";
import Users from "../pages/Users/Users";

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
        loader: ({ params }) =>
          axios.get(`/api/v1/coffee/details/${params.id}`),
      },
      {
        path: "update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          axios.get(`/api/v1/coffee/details/${params.id}`),
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () => axios.get("/api/v1/users/users"),
      },
    ],
  },
]);

export default router;
