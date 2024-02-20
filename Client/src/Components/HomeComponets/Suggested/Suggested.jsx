import React, { useEffect, useState } from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';
// import products from '../../product';
import EventCart from '../../Reuse/Cards/EventCart';
import AxiosBase from '../../../Axios/AxiosBase';

const Suggested = () => {
    const [products,setProducts] = useState({})
    useEffect(()=>{
        AxiosBase().get('/get/suggested/products')
        .then(res =>{
            setProducts(res.data)
        })
    },[])
    return (
        <div className='py-20 lg:px-0 px-2'>
            <WidthContainer>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                <div className='suggest_banner p-5 w-full lg:h-full h-[500px] bg-[url("https://electio.ecom.themepreview.xyz/home-two/wp-content/uploads/sites/5/2023/10/banner-8.jpg")] '>
                   <div className=' space-y-4'>
                    <div className=' space-y-2'>
                        <h4 className=' text-color_yellow font-semibold text-center'>New Arrival</h4>
                        <h1 className=' text-4xl text-white font-bold text-center'>Apple AirPod Max Space Orange </h1>
                    </div>
                    <div className=' text-center'>
                        <button className='py-3 px-6 bg-color_yellow hover:bg-color_primary hover:text-white text-color_primary font-semibold rounded-lg'>Explore Now</button>
                    </div>

                   </div>
                </div>
                <div className='lg:px-5'>
                    <h1 className=' md:text-5xl text-3xl text-color_primary font-semibold'>Best Selling</h1>
                    <div className='py-5 space-y-3'>
                        {
                          products?.bestSelling?.map((product,index)=>{
                            return <EventCart product={product} key={index}></EventCart>
                          })  
                        }
                    </div>
                </div>
                <div className='lg:px-5'>
                    <h1 className=' md:text-5xl text-3xl text-color_primary font-semibold'>Recently Added</h1>
                    <div className='py-5 space-y-3'>
                        {
                          products?.recentAdded?.map((product,index)=>{
                            return <EventCart product={product} key={index}></EventCart>
                          })  
                        }
                    </div>
                </div>
                </div>
            </WidthContainer>
            
        </div>
    );
}

export default Suggested;
