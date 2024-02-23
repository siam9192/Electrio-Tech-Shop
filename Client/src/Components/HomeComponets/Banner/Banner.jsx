import React, { useEffect, useState } from 'react';
import WidthContainer from '../../../Components/Reuse/WidthContainer/WidthContainer';
import { IoIosArrowForward } from "react-icons/io";
const Banner = () => {
    const [bannerIndex,setBannerIndex] = useState(0);
    const bannerImages = ['https://electio-a3623.web.app/images/banner/lgTv.webp','https://electio-a3623.web.app/images/banner/msiLap1.webp','https://electio-a3623.web.app/images/banner/iphone.webp','https://electio-a3623.web.app/images/banner/msiLap1.webp','/images/banner/1.jpg','/images/banner/2.jpg','/images/banner/3.jpg'];
    const nextBanner = ()=>{
        const next = bannerIndex+1;
        if(next === bannerImages.length){
            setBannerIndex(0);
            return;
        }
    setBannerIndex(next);
    
    }
    const previousBanner = ()=>{
        const prev = bannerIndex-1;
        
        if(prev < 0){
            setBannerIndex(bannerImages.length-1);
            return;
        }
        setBannerIndex(prev);
    }
    useEffect(()=>{
     const interval =  setInterval(()=>{
            if(bannerIndex+1 === bannerImages.length){
                setBannerIndex(0);
                return;
            }
            setBannerIndex(bannerIndex+1);
          
        },5000)
        return ()=>clearInterval(interval)
        
    },[bannerIndex])
    
    return (
        <div>
                <div className='md:py-5 pb-20 relative lg:h-[500px] md:h-[50vh] h-[40vh]  max-w-[1400px] mx-auto overflow-hidden '>
                   {
                    bannerImages.map((image,index)=>{
                        return  <img src={image} alt="" className={`transition-transform duration-200 ease-in absolute w-full h-full hover:cursor-pointer`} style={{transform:`translateX(-${bannerIndex*100}%)`,left:`${index*100}%`}}  key={index} />
                        
                    })
                   }
                   <div className='flex justify-between items-center absolute top-1/2 left-0 w-full px-5'>
                   <div className='md:text-3xl text-xl text-black md:p-4 p-2 rounded-full bg-white hover:bg-[#FE2424] hover:text-white rotate-180 hover:cursor-pointer' onClick={previousBanner}><IoIosArrowForward></IoIosArrowForward></div>
                    <div className='md:text-3xl text-xl text-black md:p-4 p-2 rounded-full bg-white hover:bg-[#FE2424] hover:text-white hover:cursor-pointer'onClick={nextBanner}><IoIosArrowForward></IoIosArrowForward></div>
                   </div>
                   
                </div>
                <div className='py-5 flex justify-center items-center gap-3'>
                    {
                        bannerImages.map((item,index)=>{
                            return <div className={`md:w-3 md:h-3 w-2 h-2 ${bannerIndex===index?'bg-blue-600':'bg-black'} rounded-full transition-all duration-200 ease-in-out`} key={index}></div>
                        })
                    }
                   </div>
        </div>
    );
}

export default Banner;
