import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ResponsiveNavbar = ({toggle,setToggle}) => {
    const navRef = useRef(null)
    const NavRoutes = [{display:'Home',path:'/'},{display:'Shop',path:'/shop'},{display:'Products',path:'/products'},{display:'Blog',path:'/blog'},{display:'Account',path:'/account'}]

 useEffect(()=>{
    document.addEventListener('mousedown',handel)
    return ()=>{
        document.removeEventListener('mousedown',handel)
    }
 },[])
    const handel = (e)=>{
        if(navRef.current && !navRef.current.contains(e.target) ){
            setToggle(false)
        }
    }
  
    return (
        <div className={`fixed top-0  w-full h-full text-color_primary transition-all lg:hidden ease-in duration-200  z-40 ${toggle ? 'left-0' : '-left-[200%]'} `}>
            <div className=' bg-white py-10  px-10 w-[80%] h-full flex flex-col text-xl space-y-5' ref={navRef}>
                <div className=' flex justify-center'>
                    <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/logo-2.png" alt="" />
                </div>
           { 
            NavRoutes.map((route,index)=>{
               return <Link className=' hover:text-color_secondary'>
                {route.display}
                </Link>
            })
           }
            </div>
            
        </div>
    );
}

export default ResponsiveNavbar;
