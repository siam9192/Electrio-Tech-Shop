import React from 'react';
import UserAuth from '../Authentication/UserAuth/UserAuth';
import { EpsBankElement } from '@stripe/react-stripe-js';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Route2 = ({children}) => {
    const {user,loading} = UserAuth();
    const {state,pathname} = useLocation()
    const navigate = useNavigate()
    if(loading){
        return <div>Loading</div>
    }
     if(user){
        return children
    }
    else {
        if(state){

        navigate(state)
        }
    else{
        return <Navigate to={'/ego/account/sign-in'} state={pathname} replace></Navigate>
    }
    }
    return (
        <div>
            
        </div>
    );
}

export default Route2;
