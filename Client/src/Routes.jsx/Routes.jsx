import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { useSelector } from 'react-redux';
import ShortDetails from '../Components/Reuse/ShortDetails/ShortDetails';

const Routes = () => {
    const shortProduct = useSelector((state)=>state.shortDetails.product);

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
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           {
            shortProduct &&  <ShortDetails></ShortDetails>
           }
        </div>

    );
}

export default Routes;

