import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Routes from "../Routes.jsx/Routes";
import Products from "../Pages/Products/Products";
import ProductsDetails from "../Pages/ProductDetails/ProductsDetails";

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
            }
        ]
    }
])

export default Router;
