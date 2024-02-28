import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserAuth from '../../Authentication/UserAuth/UserAuth'
import { FaCheck } from "react-icons/fa6";
import AxiosBase from '../../Axios/AxiosBase';

const SignUp = () => {
    const {createUser,logout} = UserAuth();
    const [error,setError] = useState('');
    const [success,setSuccess] = useState(false);
    const [isProcessing,setProcessing] = useState(false);
    const [isPopup,setPopup] = useState(false);
    const popupRef = useRef(null);
    const [isPassword,setPassword] = useState(true); 

    useEffect(()=>{
        const scrollFunction = ()=>{
            if(isPopup){
                window.scrollTo(0,0)
            }
        }
       
        window.addEventListener('scroll',scrollFunction)
        return ()=>{
            window.removeEventListener('scroll',scrollFunction)
        }
    },[isPopup])
    useEffect(()=>{

    })
    useEffect(()=>{
  const handlePopup = (e)=>{
    if(isPopup && popupRef.current && e.target.contains(popupRef.current)){
        setPopup(false)
    }
  }
  document.addEventListener('mousedown',handlePopup)

  return ()=>{
    document.addEventListener('mousedown',handlePopup)
  }
    },[isPopup])
    const handleSubmit = (e)=>{
        e.preventDefault();
        setError('')
        setProcessing(true);
        setSuccess('')
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;
        const user = {
            email,
            userName: null,
            profilePhoto: null,
            details:{
                firstName,
            lastName,
           gender: null,
           address: {
            shippingAddress: null,
            billingAddress: null
           },
           favouriteCategories: []
            },
            role:'customer',
            accountStatus: 'active',
            joined: {
               date:{
                day: new Date().getDay(),
                month: new Date().getMonth(),
                year: new Date().getFullYear()
               },
               time:{
                hours: new Date().getHours(),
                minute: new Date().getMinutes(),
                seconds: new Date().getSeconds()
               }
            }
           
        }
      
        if(password.length < 6){
      setError('Password must be 6 character');
      setProcessing(false)
      return
        }
        else if(password !== conPassword){
       setError("Both password does't match")
       setProcessing(false)
       return
        }
        createUser(email,password)
        .then(res =>{
            AxiosBase().post('/user/add',user)
            .then(res =>{
                if(res.data.insertedId){
                    // alert('Success')
                    logout()
                    setPopup(true)
                    setProcessing(false)
                    setSuccess('Sign up successful')
                     form.reset()
                }
            })
            .catch(err =>{
                setError(err.message)
                setProcessing(false)
            })
        })
        .catch(err=>{
            setError(err.message)
            setProcessing(false)
        })




    }

    const handelPassword = (e)=>{
        if(e.target.checked){
            setPassword(false)
        }
        else{
            setPassword(true)
        }
    }
    
    return (
        <div className=' grid md:grid-cols-2 lg:px-10 px-2'>
       

        <div className='overflow-hidden md:block hidden'>
            <img className='w-full' src="https://i.ibb.co/QH4WYQC/6310507.jpg" alt="" />
        </div>
        <form className='  space-y-4 lg:py-10 p-5' onSubmit={handleSubmit}>
            <img src="http://localhost:5173/images/logo.png" alt="" className=' ' />
            <h1 className='  text-color_blue md":text-4xl text-3xl pb-5'>Hey, <br /><span className=' text-color_secondary font-bold text-4xl'>Create your Account!</span></h1>
            <div className=' flex lg:flex-row flex-col md:items-center gap-5'>
            <input type="text" name='firstName' placeholder='First Name'  className=' py-4  px-2 outline-none w-full flex-1 border-2 ' required/>
            <input type="text"  name='lastName' placeholder='Last Name'  className=' py-4  px-2 outline-none w-full flex-1 border-2 ' required/>
                </div>
            
          <input type="text" name='email' placeholder='Email'  className=' py-4  px-2 outline-none w-full flex-1 border ' required/>
        <div className=' flex lg:flex-row flex-col md:items-center gap-5'>
        <input type={isPassword ? 'password' : 'text'} name='password' placeholder='Password'  className=' py-4 px-2 outline-none w-full flex-1 border-2' required/>
       

       
         
        </div>
        <input  type={isPassword ? 'password' : 'text'} name='conPassword' placeholder='ConfirmPassword'  className=' py-4  px-2 outline-none w-full flex-1 border-2 ' required/>

        <div className=' flex items-center gap-2'>
            <input type="checkbox" onChange={handelPassword}  className=' w-5 h-5 accent-color_secondary'/>
            <p>Show Password</p>
        </div>
        {
            error && <p className=' text-color_light_red '>{error}</p>
        }
          {
            success && <p className=' text-color_green '>{success}</p>
        }
        <button className=' w-full py-3 bg-color_secondary text-white text-color_primar tet-xl font-semibold'>{isProcessing ? <span><span className="loading loading-dots loading-sm"></span> Just a moment</span> : 'Sign up'}</button>
        <p>Don't have an account? <Link className=' text-color_secondary font-bold' to={'/login'}>login</Link></p>
        </form>

    </div>
    );
}

export default SignUp;
