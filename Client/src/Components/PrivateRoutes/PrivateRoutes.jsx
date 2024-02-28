import React from 'react';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { IoGameController } from 'react-icons/io5';

const PrivateRoutes = ({children}) => {
    const {user,loading} = UserAuth();
    const {pathname,state} = useLocation();
  
    if(user){
    return children
    }
    console.log(children)
     if(loading){
     return   <div className='flex  justify-center py-72 text-5xl'>
 <span className="loading loading-ring w-32 text-color_secondary"></span>
        </div>
    }
  
    if(!loading && !user){
    return <Navigate to={'/sign-in'} state={pathname} replace></Navigate>
    }
  
}

export default PrivateRoutes;
