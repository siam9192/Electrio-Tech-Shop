import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useSelector } from 'react-redux';
import ShortDetails from '../Components/Reuse/ShortDetails/ShortDetails';
import SuccessAlert from '../Components/Aleart/SuccessAlert';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Routes = () => {
    const shortProduct = useSelector((state)=>state.shortDetails.product);
    const alertStatus = useSelector(state => state.alert);
    const {pathname} = useLocation();
    const isLoginOrSignUpPath = pathname.includes('login') || pathname.includes('sign-up')


    useEffect(()=>{
        const scrollFunction = ()=>{
            if(shortProduct){
                window.scrollTo(0,0)
            }
        }
       
        window.addEventListener('scroll',scrollFunction)
        return ()=>{
            window.removeEventListener('scroll',scrollFunction)
        }
    },[shortProduct])
  
    return (
        <div>
{ !isLoginOrSignUpPath  &&    <Navbar></Navbar> }
            <Outlet></Outlet>
          {
            !isLoginOrSignUpPath &&   <Footer></Footer>
          }
           {
            shortProduct &&  <ShortDetails></ShortDetails>
           }
     
{/* <ToastContainer></ToastContainer> */}
  
        </div>

    );
}

export default Routes;

