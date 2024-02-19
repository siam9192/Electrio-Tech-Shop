import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import UserAuth from '../../Authentication/UserAuth/UserAuth'
import { FaCheck } from "react-icons/fa6";
import AxiosBase from '../../Axios/AxiosBase';

const SignUp = () => {
    const {createUser,logout} = UserAuth();
    const [error,setError] = useState('');
    const [isProcessing,setProcessing] = useState(false);
    const [isPopup,setPopup] = useState(false);
    const popupRef = useRef(null);

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

                }
            })
            .catch(err =>{
                console.log(err)
                setProcessing(false)
            })
        })
        .catch(err=>{
            console.log(err)
            setProcessing(false)
        })




    }
    
    return (
        <div className='lg:py-20 py-10 flex justify-center items-center lg;px-0 px-2'>
            <form className=' lg:w-1/2 w-full space-y-4' onSubmit={handleSubmit}>
                <h1 className=' text-4xl text-color_primary font-semibold text-center'>Sign up </h1>
              <div className=' flex lg:flex-row flex-col md:items-center gap-5'>
                <input type="text" name='firstName' placeholder='First Name'  className=' py-3 px-2 outline-none w-full flex-1 bg-gray-200' required/>
                <input type="text" name='lastName' placeholder='Last Name'  className=' py-3 px-2 outline-none w-full flex-1 bg-gray-200' required/>
              </div>
              <input type="email" name='email' placeholder='Email'  className=' py-3 px-2 outline-none w-full flex-1 bg-gray-200' required/>
            <div className=' flex lg:flex-row flex-col md:items-center gap-5'>
            <input type="text" name='password' placeholder='Password'  className=' py-3 px-2 outline-none w-full flex-1 bg-gray-200' required/>
              <input type="text" name='conPassword' placeholder='Confirm Password'  className=' py-3 px-2 outline-none w-full flex-1 bg-gray-200' required/>
            </div>
            <button disabled={isProcessing} className=' w-full py-3 bg-color_yellow text-color_primary font-semibold'>{isProcessing ? <span className="loading loading-dots loading-sm"></span> : 'Sign Up'}</button>
            <p>Already have an account? <Link className=' text-color_secondary font-bold' to={'/login'}>Login</Link></p>
            {error && <p className=' text-color_light_red '>{error}</p>}
            </form>
          {
            isPopup &&   <div  className={`w-full h-full fixed top-0 left-0 bg-black bg-opacity-20 flex justify-center items-center lg:px-0 px-2 ${isPopup ? ' scale-100' : 'scale-0' } transition-transform duration-700 ease-in`}>

            <div ref={popupRef} className=' p-10 bg-white lg:w-1/3 md:w-1/2 w-full rounded-lg'>
                <div className=' flex justify-center'>
                <div className=' p-5 bg-color_secondary text-white text-5xl rounded-full'>
                    <FaCheck></FaCheck>
                </div>
               
                </div>
                <h1 className=' text-3xl font-semibold text-center text-color_blue'>Successful !</h1>
                <p className=' text-color_primary text-center py-1'>Account Successfully created. Thanks for joining with electio</p>
                <p></p>
            </div>

        </div>
          }
        </div>
    );
}

export default SignUp;
