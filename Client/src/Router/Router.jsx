import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Routes from "../Routes.jsx/Routes";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/ProductDetails/ProductsDetails";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

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
            }
        ]
    }
])

export default Router;
