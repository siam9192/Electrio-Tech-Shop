import React, { useState } from 'react';
import WidthContainer from '../Reuse/WidthContainer/WidthContainer';
import { Link } from 'react-router-dom';
import { BiPhoneCall } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    const [isHover,setHover] = useState(false)
    const sections = [
        {
            name:'Store',
            items:["Trending Now", "Best Seller", "Discount Items", "New Release", "Out Of Stock"]
        },
        {
            name:'Information',
            items:["About Us", "Delivery Information", "Terms & Conditions", "Privacy Policy", "Sales Information"]
        },
        {
            name:'Account',
            items: ["My Account", "My Orders", "My Wishlist", "Return Policy", "Order Tracking"]
        }
    ]
    
    return (
        <div className=' lg:px-0 px-2'>
            <WidthContainer>
                <div className='py-20 border-b-2 grid lg:grid-cols-4 grid-cols-1 gap-10'>
                    <div className=' space-y-4 '>
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/logo-2.png" alt="" />
                        <p>Empowering Your Life with Cutting-Edge Electronics. Unleash the Power of the and Electronics with Us! </p>
                        <h1 className=' text-3xl text-color_primary font-bold'>Follow Us</h1>
                        <div className=' flex items-center gap-3 text-2xl text-black'>
                            <FaFacebookSquare></FaFacebookSquare>
                            <BsInstagram></BsInstagram>
                            <FaSquareXTwitter></FaSquareXTwitter>
                            <FaPinterestSquare></FaPinterestSquare>
                        </div>

                    </div>
                    <div className='md:col-span-2 flex md:flex-row flex-col justify-between'>
                   {
                    sections.map((item,index)=>{
                        return <div className=' space-y-6' key={index}> 
                            <h1 className=' text-2xl font-bold'>{item.name}</h1>
                            <div className='flex flex-col gap-2'>
                                {item.items.map((route,index)=>{
                                    return <Link className=' hover:text-color_secondary text-text_color text-[18px]' key={index}>{route}</Link>
                                })}
                            </div>
                        </div>
                    })
                   }
                    </div>
                    <div className=' space-y-6'>
                    <h1 className=' text-2xl font-bold'>Store Details</h1>
                    <div className=' flex items-center gap-2' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                        <div className={`px-4 py-3 bg-color_yellow text-color_primary text-xl transition-transform duration-200  ${isHover ? ' -rotate-180' : ' rotate-0'}`}>
                            <BiPhoneCall></BiPhoneCall>
                        </div>
                        <div className=' space-y-1'>
                                <p>Need Any Help?</p>
                                <h2 className='font-semibold text-color_primary'>(+92) 728 - 918 - 029</h2>
                            </div>
                    </div>
                    <p className=' md:text-xl text-text_color'>Address: 738 New Green Street, Newyork City United Kingdom </p>
                    <p className=' md;text-xl text-text_color'> Email:supportyourmail@gmail.com
</p>

                    </div>

                </div>
                <div className=' py-5 lg:flex justify-between items-center'>
                    <p className=' lg:text-xl text-text_color'>
                    Copyright © 2023 teconce. All Rights Reserved.
                    </p>
                    <div className=' flex items-center gap-3'>
                        <p className=' text-text_color'>We Accept </p>
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/Visa.svg" alt="" className='w-10'/>
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/PayPal.svg"  className='w-10' alt="" />
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/Mastercard.svg"  className='w-10' alt="" />
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/ApplePay.svg"  className='w-10' alt="" />
                    </div>
                </div>
            </WidthContainer>
        </div>
    );
}

export default Footer;
