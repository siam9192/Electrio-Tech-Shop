import React from 'react';
import { FaUser } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
const DashboardSidebar = () => {
    const {pathname} = useLocation();
  const routes = [
     {
        path:'/dashboard/profile',
        display:'Profile',
        icon: <FaUser></FaUser>
     }   ,
     {
        path:'/dashboard/favourites',
        display:'My Favoutites',
        icon: <IoMdHeart></IoMdHeart>
     },
     {
        path:'/dashboard/orders',
        display:'My Orders',
        icon: <FaShippingFast></FaShippingFast>
     },
     {
        path:'/dashboard/payment-history',
        display:'Payment History',
        icon: <MdOutlinePayment></MdOutlinePayment>
     }
    ]
    return (
        <div className=' p-5'>

            {
                routes.map((route,index)=>{
                    return <Link to={route.path}>
                    <div className={`p-5 ${route.path === pathname ? ' text-color_blue bg-[#c5cced]':'text-color_primary'} text-xl font-semibold flex  items-center gap-2 `} key={index}>
                      <span>{route.icon}</span>  <span> {route.display}</span> 
                    </div>
                    </Link>
                })
            }
        </div>
    );
}

export default DashboardSidebar;
