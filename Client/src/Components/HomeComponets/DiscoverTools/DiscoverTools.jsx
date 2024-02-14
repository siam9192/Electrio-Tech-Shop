import React from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';
import { FaArrowRight } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LiaWalletSolid } from "react-icons/lia";
import { PiGiftLight } from "react-icons/pi";
const DiscoverTools = () => {
    const services = [
        {
        name:'Free Delivery',
        service:'From All Orders Over $100',
        icon: <LiaShippingFastSolid></LiaShippingFastSolid>,
        },
        {
            name:'24/7 Support',
            service:'Get Online Support 24/7',
            icon: <TfiHeadphoneAlt></TfiHeadphoneAlt>,
            }
            ,
            {
                name:'15 Days Refund',
                service:'Return Within 15 Days',
                icon: <LiaWalletSolid></LiaWalletSolid>,
                },
                {
                    name:'Gift Voucher',
                    service:'Get Vouchers On Products',
                    icon: <PiGiftLight></PiGiftLight>,
                    }
    ]
    return (
       <div className='my-10'>
         <div className='min-h-[80vh]  bg-[#eef0ff] ' style={{backgroundImage: "url('https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/earphone.png')",backgroundRepeat:'no-repeat',backgroundPosition:'left'}}>
            <WidthContainer>
                <div className='py-20  md:px-10 px-2 grid lg:grid-cols-3 grid-cols-1'>
                    <div className=' col-span-2'></div>
                    <div>
                    <div className=' space-y-6'>
                        <div className=' space-y-3'>
                        <h3 className=' text-color_secondary font-bold'>DISCOVER TOOLS</h3>
                        <h1 className=' text-5xl font-bold text-color_primary'>Smart watch  </h1>
                        </div>
                        <p>Electronics stores are renowned for being the first to showcase new gadgets and devices. </p>

                        <div className='grid grid-cols-4 gap-3'>
                            <div className=' bg-white p-5 text-color_primary space-y-1 text-center rounded-lg'>
                                <h1 className=' md:text-4xl text-3xl font-bold'>{93}</h1>
                                <p>Days</p>
                            </div>
                            <div className=' bg-white p-5 text-color_primary space-y-1 text-center rounded-lg'>
                                <h1 className='md:text-4xl text-3xl font-bold'>{'0'+4}</h1>
                                <p>Hours</p>
                            </div>
                            <div className=' bg-white p-5 text-color_primary space-y-1 text-center rounded-lg'>
                                <h1 className=' md:text-4xl text-3xl font-bold'>{20}</h1>
                                <p>Minutes</p>
                            </div>
                            <div className=' bg-white p-5 text-color_primary space-y-1 text-center rounded-lg'>
                                <h1 className=' md:text-4xl text-3xl font-bold'>{56}</h1>
                                <p>Seconds</p>
                            </div>
                        </div>

                        <button className=' py-4 px-8 bg-color_primary text-white hover:bg-color_yellow hover:text-color_primary rounded-md flex items-center gap-2'><span>Shop Now </span><FaArrowRight></FaArrowRight></button>
                        </div>
                    
                    </div>
                </div>
            </WidthContainer>
        </div>
        <div className=' bg-color_secondary py-10'>
            <WidthContainer>
                <div className=' grid grid-cols-4'>
                    {
                        services.map((service,index)=>{
                            return <div className=' flex gap-2' key={index}>
                              <div className=' text-color_yellow text-4xl'>
                              {service.icon}
                              </div>
                                <div className=' space-y-2'>
                                    <h1 className=' text-3xl font-semibold text-white'>{service.name}</h1>
                                </div>

                            </div>
                        })
                    }
                </div>
            </WidthContainer>
        </div>
       </div>
    );
}

export default DiscoverTools;
