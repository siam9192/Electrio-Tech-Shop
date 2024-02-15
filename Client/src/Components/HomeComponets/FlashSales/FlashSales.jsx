import React from 'react';
import WidthContainer from '../../Reuse/WidthContainer/WidthContainer';
import products from '../../product';
import FlashCard from '../../Reuse/Cards/FlashCard';
import { HiArrowLongRight } from "react-icons/hi2";
const FlashSales = () => {
    return (
        <div className=' py-10 lg:px-0 px-2'>
            <WidthContainer>
            <div className=' space-y-3'> <h3 className=' text-color_secondary font-bold'>TRENDING ITEMS</h3>
                        <h1 className=' md:text-5xl text-3xl font-bold text-color_primary'>Today's Flash Sales </h1></div>
            <div className='pt-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    products.map((product,index)=>{
                        return <FlashCard product={product} key={index}></FlashCard>
                    })
                }
            </div>
            <div className='pt-5 flex justify-center items-center'>
                <button className=' bg-color_secondary text-white py-4 px-6 font-semibold rounded-md flex  justify-center items-center gap-2 hover:bg-color_yellow hover:text-color_primary'> <span>View All Products</span> <HiArrowLongRight></HiArrowLongRight></button>
            </div>
            </WidthContainer>
        </div>
    );
}

export default FlashSales;
