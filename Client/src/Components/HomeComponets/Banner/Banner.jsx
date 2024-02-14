import React from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';

const Banner = () => {
    return (
<WidthContainer>
<div className='py-10 space-y-5 lg:px-0 px-2'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
               <div className=' overflow-hidden'>
               <img src="/images/banner/iphone.webp" alt="" className=' transition-all duration-300 hover:scale-110 lg:h-[350px] w-full rounded-lg'/>
               </div>
              <div className=' overflow-hidden'>
              <img src="/images/banner/lgTv.webp" alt="" className=' transition-all duration-300 hover:scale-110 h-[350px] w-full rounded-lg'/>
              </div>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-4 md:gap-5 gap-2'>
               <div className=' overflow-hidden col-span-1'>
               <img src="/images/banner/appleWatch1.jpg" alt="" className=' transition-all duration-300 hover:scale-110 lg:h-[350px] w-full rounded-lg'/>
               </div>
              <div className=' overflow-hidden col-span-2'>
              <img src="/images/banner/msiLap1.webp" alt="" className=' transition-all duration-300 hover:scale-110 lg:h-[350px] w-full rounded-lg'/>
              </div>
              <div className=' overflow-hidden col-span-1'>
               <img src="/images/banner/iphone.webp" alt="" className=' transition-all duration-300 hover:scale-110 lg:h-[350px] w-full rounded-lg'/>
               </div>
            </div>
            
        </div>
</WidthContainer>
    );
}

export default Banner;
