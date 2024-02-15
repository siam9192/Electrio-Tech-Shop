import React from 'react';
import WidthContainer from '../Reuse/WidthContainer/WidthContainer';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
const NewsLetter = () => {
    return (
        <div className=' md:py-20 my-20 py-10 lg:px-0 px-2 min-h-[60vh] bg-[#f3f4f8] lg:bg-[url("https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/drone-1.png")] ' style={{backgroundPosition:'left', backgroundRepeat:'no-repeat '}}>
            <WidthContainer>
                <div className=' lg:flex justify-end lg:space-y-0 space-y-6'>
                    <div className=' lg:hidden block'>
                        <img src="https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/drone-1.png" alt="" />
                    </div>
              <div className=' space-y-6'>
              <div className=' space-y-3'>
                        <h3 className=' text-color_secondary font-bold'>GET EVERY SINGLE UPDATES</h3>
                        <h1 className='md:text-5xl text-3xl font-bold text-color_primary'>Subscribe Newsletter</h1>
                        </div>
                        <p>Become a premium member and get 20% off your next purchase! </p>
                        <div className=' flex md:flex-row flex-col lg:items-center gap-3'>
                            <div className=' flex items-center gap-2 bg-white px-2 rounded-lg'>
                              <div className=' text-2xl'>
                              <MdOutlineMarkEmailUnread ></MdOutlineMarkEmailUnread>
                              </div>
                            <input type="text" placeholder='Email address' className='lg:w-60 w-full py-4 bg-white border-none outline-none'/>
                            </div>
                            <button className='md:block hidden py-8 px-10 bg-color_yellow text-color_primary hover:bg-color_primary hover:text-white rounded-lg'>Subscribe Now</button>
                            <button className='md:hidden block py-3 px-6 w-fit bg-color_yellow text-color_primary hover:bg-color_primary hover:text-white rounded-lg'>Subscribe Now</button>
                        </div>
              </div>
                </div>
            </WidthContainer>
            
        </div>
    );
}

export default NewsLetter;
