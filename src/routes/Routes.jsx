import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Error/Error";
import Checkout from "../pages/Checkout/Checkout";
import Orders from "../pages/Orders/Orders";
import PrivateRoutes from "./PrivateRoutes";

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
        {
          path:'/checkout/:id',
          element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/orders',
          element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
        }
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