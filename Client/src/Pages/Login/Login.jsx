import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UserAuth from '../../Authentication/UserAuth/UserAuth';

const Login = () => {
    const {login} = UserAuth();
    const [error,setError] = useState('');
    const [isProcessing,setProcessing] = useState(false);
    const {pathname,state} = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        setError('')
        setProcessing(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(res=>{
            if(state){
           navigate(state)
            }
            else{
                navigate('/')
            }
            setProcessing(false)
        })

        .catch(err =>{
            setProcessing(false)
            setError('Something went wrong')
        })
        
    }
    return (
        <div className='py-10 flex justify-center items-center lg;px-0 px-2'>
        <form className=' lg:w-1/3 md:w-1/2 w-full space-y-4' onSubmit={handleSubmit}>
            <h1 className=' text-4xl text-color_primary font-semibold text-center'>Login </h1>
          <input type="email" name='email' placeholder='Email'  className=' py-3 px-2 outline-none w-full flex-1 bg-gray-200' required/>
        <div className=' flex lg:flex-row flex-col md:items-center gap-5'>
        <input type="text" name='password' placeholder='Password'  className=' py-3 px-2 outline-none w-full flex-1 bg-gray-200' required/>
         
        </div>
        <button className=' w-full py-3 bg-color_yellow text-color_primary'>{isProcessing ? <span className="loading loading-dots loading-sm"></span> : 'Login'}</button>
        <p>Don't have an account? <Link className=' text-color_secondary font-bold' to={'/sign-up'}>Sign up</Link></p>
        </form>
    </div>
    );
}

export default Login;
