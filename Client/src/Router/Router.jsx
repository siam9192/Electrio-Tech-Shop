import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Routes from "../Routes.jsx/Routes";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Routes></Routes>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default Router;
