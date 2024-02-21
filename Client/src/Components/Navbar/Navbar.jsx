import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import WidthContainer from '../Reuse/WidthContainer/WidthContainer'
import { Link, useLocation } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { RiWebcamLine } from "react-icons/ri";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import ResponsiveNavbar from './ResponsiveNavbar';
import SearchBar from '../SearchBar/SearchBar';
import CartBar from '../Cartbar/Cartbar';
import UserAuth from '../../Authentication/UserAuth/UserAuth';
import CartData from '../../TanstackQuery/CartData';

const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const [isSearch,setSearch] = useState(false);
  const [isCart,setCart] = useState(false);
  const {pathname} = useLocation();


  const {user} = UserAuth();
  const {cartRefetch,totalItems} = CartData();

  useEffect(()=>{
      if(user){
      cartRefetch()
      }
  },[user])




    const slidingText = ['Order online call us +378 029 819 ',"Free Shipping Free Return for above $50.00 ","Join our electio shop and enjoy -15% discount on all trending products",'Order online call us +378 029 819 ']
    const categories = [
      {
        category: "Cell Phone",
        icon: <IoPhonePortraitOutline></IoPhonePortraitOutline>
      },
      {
        category:"Computer & Laptop",
        icon:<HiOutlineDesktopComputer></HiOutlineDesktopComputer>
      }
        ,
      {
        category:  "Accessories",
        icon:<IoWatchOutline></IoWatchOutline>
      },
      {
        category: " Headphone",
        icon:<PiHeadphones></PiHeadphones>
      },
        {
            category:"Smart Watch",
            icon:<IoWatchOutline></IoWatchOutline>
        },
      {
        category: " Web Cam",
        icon: <IoGameControllerOutline></IoGameControllerOutline>
      }
    ]
  
    const NavRoutes = [{display:'Home',path:'/'},{display:'Shop',path:'/shop'},{display:'Products',path:'/products'},{display:'Blog',path:'/blog'}]
    const handleToggle = (value)=>{
      setToggle(value)
    }

    const handleSearch = (value)=>{
      setSearch(value)
    }
    const handleCart = (value)=>{
      setCart(value)
    }
    useEffect(()=>{
      setToggle(false);
      setSearch(false);
      setCart(false);
    },[pathname])
    return (
        <div className='text-white'>
            <div className='py-3 bg-color_secondary  text-[14px] '>
                <Marquee speed={120} loop={0}>
                <div className=' flex gap-5 items-center'>
                {
                    slidingText.map((item,index)=> <div className=' w-fit flex items-center gap-4' key={index}>
                        <div className='w-2 h-2 rounded-full bg-[#fff] '></div>
                        <span>{item}</span>
                    </div>)
                 }
                </div>
                </Marquee>
            </div>
        <div className='lg:px-0 px-2'>
        <WidthContainer>
            <div className='flex justify-between items-center text-color_primary py-4 '>
                <nav className='space-x-6  text-[18px] lg:block hidden'>
                    {
                        NavRoutes.map((route,index)=><Link to={route.path} key={index}>{route.display}</Link>)
                    }
                </nav>
                <div>
                    <img src="/images/logo.png" alt="" />
                </div>
                <div className=' flex items-center md:gap-8 gap-3 text-2xl text-black'>
                    <div className=' hover:cursor-pointer' onClick={()=>setSearch(true)}>
                    <FiSearch></FiSearch>
                    </div>
                   <Link to={'/sign-up'}>
                   <div>
                      <FaRegUser></FaRegUser>
                    </div></Link>
                    <div className=' relative'>
                    <AiOutlineHeart></AiOutlineHeart>
                      <div className=' w-5 h-5 bg-color_yellow flex justify-center items-center absolute -top-3 -right-3 rounded-full text-[#22] text-[14px]'>0</div>
                    </div>
                    <Link to={'/my-cart'}>
                    <div className=' relative hover:cursor-pointer' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5997 22.7383H6.39971C5.86804 22.7383 5.34244 22.6252 4.85781 22.4066C4.37318 22.1879 3.9406 21.8687 3.58878 21.47C3.23697 21.0714 2.97397 20.6025 2.81723 20.0945C2.6605 19.5864 2.61362 19.0508 2.67971 18.5233L3.92971 8.52328C4.04405 7.61692 4.48489 6.78333 5.16966 6.17863C5.85444 5.57393 6.73616 5.23961 7.64971 5.23828H16.3497C17.2632 5.23977 18.1448 5.57399 18.8296 6.17842C19.5145 6.78286 19.9557 7.6161 20.0707 8.52228L21.3207 18.5223C21.3868 19.05 21.3399 19.5857 21.1831 20.0938C21.0263 20.602 20.7632 21.071 20.4113 21.4697C20.0594 21.8685 19.6267 22.1878 19.142 22.4065C18.6572 22.6252 18.1315 22.7383 17.5997 22.7383ZM7.64571 6.73828C7.09764 6.73929 6.56872 6.93996 6.1579 7.30274C5.74709 7.66552 5.48252 8.16555 5.41371 8.70928L4.16371 18.7093C4.12378 19.0262 4.15185 19.348 4.24603 19.6532C4.34022 19.9584 4.49837 20.24 4.70994 20.4793C4.92151 20.7186 5.18165 20.9101 5.47302 21.0409C5.76439 21.1718 6.0803 21.2391 6.39971 21.2383H17.5997C17.9188 21.2385 18.2343 21.1708 18.5252 21.0397C18.8162 20.9086 19.0759 20.7171 19.2871 20.4778C19.4983 20.2386 19.6562 19.9572 19.7503 19.6523C19.8443 19.3474 19.8724 19.0259 19.8327 18.7093L18.5827 8.70928C18.5133 8.16564 18.2484 7.66584 17.8375 7.30316C17.4266 6.94047 16.8978 6.73969 16.3497 6.73828H7.64571Z" fill="#000E3C"></path>
                                    <path d="M15.4998 9.75024C15.3008 9.75024 15.1101 9.67123 14.9694 9.53057C14.8288 9.38992 14.7498 9.19916 14.7498 9.00024V5.50024C14.7498 4.7709 14.46 4.07143 13.9443 3.5557C13.4286 3.03998 12.7291 2.75024 11.9998 2.75024C11.2704 2.75024 10.5709 3.03998 10.0552 3.5557C9.53949 4.07143 9.24976 4.7709 9.24976 5.50024V9.00024C9.24976 9.19916 9.17074 9.38992 9.03009 9.53057C8.88943 9.67123 8.69867 9.75024 8.49976 9.75024C8.30084 9.75024 8.11008 9.67123 7.96943 9.53057C7.82877 9.38992 7.74976 9.19916 7.74976 9.00024V5.50024C7.74976 4.37307 8.19752 3.29207 8.99455 2.49504C9.79158 1.69801 10.8726 1.25024 11.9998 1.25024C13.1269 1.25024 14.2079 1.69801 15.005 2.49504C15.802 3.29207 16.2498 4.37307 16.2498 5.50024V9.00024C16.2498 9.19916 16.1707 9.38992 16.0301 9.53057C15.8894 9.67123 15.6987 9.75024 15.4998 9.75024V9.75024Z" fill="#000E3C"></path>
                                    <path d="M13.9998 18.75H9.99976C9.80084 18.75 9.61008 18.671 9.46943 18.5303C9.32877 18.3897 9.24976 18.1989 9.24976 18C9.24976 17.8011 9.32877 17.6103 9.46943 17.4697C9.61008 17.329 9.80084 17.25 9.99976 17.25H13.9998C14.1987 17.25 14.3894 17.329 14.5301 17.4697C14.6707 17.6103 14.7498 17.8011 14.7498 18C14.7498 18.1989 14.6707 18.3897 14.5301 18.5303C14.3894 18.671 14.1987 18.75 13.9998 18.75V18.75Z" fill="#000E3C"></path>
                                </svg>
              <div className=' w-5 h-5 bg-color_yellow flex justify-center items-center absolute -top-3 -right-3 rounded-full text-[#22] text-[14px]'>{totalItems}</div>
                    </div>
                    </Link>
                   <button className=' lg:hidden block  text-color_secondary text-3xl' disabled={toggle} onClick={()=>handleToggle(true)} >
                    <HiOutlineMenuAlt3></HiOutlineMenuAlt3>
                   </button>
                </div>
            </div>
        </WidthContainer>
        <div className=' border lg:block hidden'>
        <WidthContainer >
        <div className=' flex items-center justify-between py-5 '>
                <div className=' flex items-center gap-4 text-color_primary  '>
                    {
                        categories.map((category,index)=>{
                        return    <Link>
                        <div className=' flex items-center gap-2' key={index}>
                            <span>{category.icon}</span>
                                <h2>{category.category}</h2>
                                
                            </div></Link>
                        })
                    }
                </div>
                <div className=' flex items-center gap-2 text-color_primary'>
                <HiOutlinePhone></HiOutlinePhone>
              <h2 className=' hover:text-color_secondary'>
943 097 254 928</h2>
              </div>
            
            </div>
        </WidthContainer>
        </div>
        </div>

         <SearchBar isSearch={isSearch} setSearch={handleSearch}></SearchBar>
        <ResponsiveNavbar toggle={toggle} setToggle= {handleToggle}></ResponsiveNavbar>
       {
        isCart &&  <CartBar setCart={handleCart}></CartBar>
       }
        </div>
    );
}

export default Navbar;
