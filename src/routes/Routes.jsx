import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
      ]
    },
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
  ]);

export default router