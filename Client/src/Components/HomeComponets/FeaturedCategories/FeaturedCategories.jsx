import React, { useEffect, useState } from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';
import { HiArrowLongRight } from "react-icons/hi2";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiDeliveryDrone } from "react-icons/gi";
import { PiMonitor } from "react-icons/pi";
import { PiHeadphonesLight } from "react-icons/pi";
import { FiSmartphone } from "react-icons/fi";
import { IoCameraOutline } from "react-icons/io5";
import { IoWatchOutline } from "react-icons/io5";
import { MdOutlineSettingsRemote } from "react-icons/md";
import  './FeaturedCategories.css'
import AxiosBase from '../../../Axios/AxiosBase';
const FeaturedCategories = () => {
    const [categoriesData,setCategories] = useState([])

    useEffect(()=>{
        AxiosBase().get('/count/products/categories')
        .then(res =>{
            setCategories(res.data)
        })
    },[])
  
    console.log(categoriesData)
          
    const categories = [
        {
            name:'Computer',
            products: categoriesData.find(ele => ele._id === 'Computer')?.count||0,
            icon:<HiOutlineDesktopComputer></HiOutlineDesktopComputer>
        },
        {
            name:'Controller',
            products:categoriesData.find(ele => ele._id === 'Controller')?.count||0,
            icon:<MdOutlineSettingsRemote></MdOutlineSettingsRemote>
        },
        {
            name:'Watches',
            products:categoriesData.find(ele => ele._id === 'Watches')?.count||0,
            icon: <IoWatchOutline></IoWatchOutline>

        },
        {
            name:'Drones',
            products: categoriesData.find(ele => ele._id === 'Drones')?.count||0,
            icon: <GiDeliveryDrone></GiDeliveryDrone>
        },
        {
            name:'Monitor',
            products:categoriesData.find(ele => ele._id === 'Monitors')?.count||0,
            icon:<PiMonitor></PiMonitor>
        },
        {
            name:'Headphones',
            products: categoriesData.find(ele => ele._id === 'Headphones')?.count||0,
            icon:<PiHeadphonesLight></PiHeadphonesLight>
        },
        {
            name:'Camera',
            products: categoriesData.find(ele => ele._id === 'Cameras')?.count||0,
            icon: <IoCameraOutline></IoCameraOutline>
        },
        {
            name:'Smart Phones',
            products: categoriesData.find(ele => ele._id === 'Smart Phones')?.count||0,
            icon: <FiSmartphone></FiSmartphone>
        },
        
        
        
    ]
    // let categories = []
    return (
        <div className=' py-10'>
            <WidthContainer>
                <div className=' lg:flex  items-center  lg:space-y-0 space-y-5 lg:px-0 px-2'>
                    <div className='lg:w-[40%] space-y-6'>
                       <div className=' space-y-3'> <h3 className=' text-color_secondary font-bold'>TOP CATEGORIES</h3>
                        <h1 className=' lg:text-5xl text-4xl font-bold text-color_primary'>Featured Categories </h1></div>
                        <p>Electronics stores are renowned for being the first to showcase new gadgets and devices. </p>
                        <div className=' w-fit md:py-4 md:px-6 py-2 px-6 bg-color_secondary text-white flex items-center gap-2 hover:cursor-pointer text-xl rounded-md hover:bg-color_yellow hover:text-color_primary'><span>Explore Now</span> <span><HiArrowLongRight></HiArrowLongRight></span></div>
                    </div>
                    <div className=' lg:w-[60%] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 lg:px-0  px-10'>
                        {
                          categories.map((category,index)=>{
                            return <div className='category_card p-10 border rounded-lg hover:bg-color_secondary hover:cursor-pointer   flex justify-center flex-col gap-2 items-center transition-all  duration-200 ease-in-out '>
                             <div className='category_icon w-20 h-20 bg-[#ebeefd] rounded-full flex justify-center items-center flex-col '>
                                <div className=' text-4xl text-color_secondary'>{category.icon}</div>
                                                                
                             </div>
                             <h3 className=' category_name font-semibold'>{category.name}</h3>
                             <h3 className='products_count text-xl'>{category.products} Products</h3>
                            </div>
                          })
                        }

                    </div>
                </div>
            </WidthContainer>
        </div>
    );
}

export default FeaturedCategories;
