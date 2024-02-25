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
        <div className=' grid md:grid-cols-2 lg:px-10 px-2'>
        <form className='  space-y-4 py-10' onSubmit={handleSubmit}>
            <img src="http://localhost:5173/images/logo.png" alt="" className=' pb-10' />
            <h1 className='  text-color_blue md":text-4xl text-3xl'>Hello, <br /><span className=' text-color_secondary font-bold md:text-6xl text-5xl'>Welcome Back!</span></h1>
          
          <input type="email" name='email' placeholder='Email'  className=' py-6  px-2 outline-none w-full flex-1 border ' required/>
        <div className=' flex lg:flex-row flex-col md:items-center gap-5'>
        <input type="text" name='password' placeholder='Password'  className=' py-6 px-2 outline-none w-full flex-1 border' required/>

       
         
        </div>

        <div className=' flex items-center gap-2'>
            <input type="checkbox"  className=' w-5 h-5 accent-color_secondary'/>
            <p>Show Password</p>
        </div>
        <button className=' w-full py-3 bg-color_secondary text-white text-color_primar tet-xl font-semibold'>{isProcessing ? <span className="loading loading-dots loading-sm"></span> : 'Login'}</button>
        <p>Don't have an account? <Link className=' text-color_secondary font-bold' to={'/sign-up'}>Sign up</Link></p>
        </form>

        <div className='overflow-hidden md:block hidden'>
            <img className='w-full' src="https://i.ibb.co/QH4WYQC/6310507.jpg" alt="" />
        </div>
    </div>
    );
}

export default Login;
