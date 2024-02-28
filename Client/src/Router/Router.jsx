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
import About from "../Pages/About/About";
import Brands from "../Pages/Brands/Brands";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";

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
                path:'/brands',
                element:<Brands></Brands>
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
            {
            path:'/about',
            element:<About></About>
            },
            
        ]
    },
    {
        path:'/my-profile',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path:'/my-profile',
                element:<Profile></Profile>
            },
            {
                path:'/my-profile/orders',
                element:<Orders></Orders>
            },
            {
                path:'/my-profile/payment-history',
                element:<PaymentHistory></PaymentHistory>
            }
        ]
    }
])

export default Router;
