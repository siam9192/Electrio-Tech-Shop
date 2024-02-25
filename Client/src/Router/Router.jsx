import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Routes from "../Routes.jsx/Routes";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/ProductDetails/ProductsDetails";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProfileDetails from "../Pages/Profile/ProfileDetails";
import Profile from "../Pages/Dashboard/Profile";
import Orders from "../Pages/Dashboard/Orders";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Routes></Routes>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products',
                element:<Products></Products>
            },
            {
                path:'/products/product/details/:id',
                element:<ProductsDetails></ProductsDetails>
            },
            {
                path:'/my-cart',
                element:<Cart></Cart>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/sign-up',
                element:<SignUp></SignUp>
            },
            // {
            // path:'/profile',
            // element:<Profile></Profile>
            // },
            
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'/dashboard/profile',
                element:<Profile></Profile>
            },
            {
                path:'/dashboard/orders',
                element:<Orders></Orders>
            },
            {
                path:'/dashboard/payment-history',
                element:<PaymentHistory></PaymentHistory>
            }
        ]
    }
])

export default Router;
