import React from 'react';
import UserAuth from '../Authentication/UserAuth/UserAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Route1 = ({children}) => {
    const {user,loading} = UserAuth();
    const {state} = useLocation()
    const navigate = useNavigate();
    if(loading){
        return <div><p>Loading...</p></div>
    }
   if(!user){
    return children
   }
   else{
 if(state){
navigate(state)
 }
 else{
    navigate('/')
 }
   }
}

export default Route1;
