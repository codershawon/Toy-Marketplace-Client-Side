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
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import UpdatedToys from "../Pages/UpdatedToys/UpdatedToys";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/toySuperHero",
        element: <AddToy></AddToy>,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
        loader:()=>fetch(`http://localhost:5000/newToySuperHero`)
      },
      {
        path:"/allToys",
        element:<AllToys></AllToys>,
        loader:()=>fetch(`http://localhost:5000/newToySuperHero`)
      },
      {
        path: "/toyDetails/:id",
        element: <ToyDetails />,
        loader:({params})=>fetch(`http://localhost:5000/newToySuperHero/${params.id}`)
      },
     {
      path:"/updatedToys/:id",
      element:<UpdatedToys></UpdatedToys>,
      loader:({params})=>fetch(`http://localhost:5000/newToySuperHero/${params.id}`)
     }
      
    ],
  },
]);

export default router;
