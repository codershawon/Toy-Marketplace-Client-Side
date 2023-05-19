import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
// import PrivateRoutes from "./PrivateRoutes";
import Blogs from "../Pages/Blogs/Blogs";
import PrivateRoutes from "./PrivateRoutes";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <PrivateRoutes><Home></Home></PrivateRoutes>,
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/login",
            element:<SignIn></SignIn>
        },
        {
            path:"/blogs",
            element:<PrivateRoutes><Blogs></Blogs></PrivateRoutes>
        },
        {
          path:"/toySuperHero",
          element:<AddToy></AddToy>,
        },
        {
          path:"/allToys",
          element:<AllToys></AllToys>
        }
      ],
    },
  ]);

  export default router;